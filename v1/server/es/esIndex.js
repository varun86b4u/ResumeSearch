/*var ElasticSearchClient = require('elasticsearchclient');
var client = new ElasticSearchClient({
  host: 'localhost',
  port: 9200,
  secure:false,
});*/
//Hack for this issue https://github.com/elastic/elasticsearch-js/issues/278
var EventEmitter = require('events').EventEmitter;
var Log = require('elasticsearch/src/lib/log');
Log.prototype.listenerCount = EventEmitter.prototype.listenerCount;

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

var searchTypes = {
	"ALL_WORDS_MUST":1,
	"ANY_WORD":2
};

var searchTextInDocs = function(indexName,indexType,searchText,searchType,from,size,callback){
	var searchQuery = getSearchQueryBySearchType(searchText,searchType,from,size);
	client.search({
			"index": indexName, 
			 "type":indexType,
			 "body": searchQuery
			}, function(err, response, status){
    		callback(err,response);
 	});
};

var getSearchQueryBySearchType = function(searchText,searchType,from,size){
	var searchQuery = '';
	switch(searchType){
		case searchTypes.ALL_WORDS_MUST+'':
			searchQuery = getAllWordsMustQuery(searchText,from,size);
			break;
		case searchTypes.ANY_WORD+'':
			break;
	}
	return searchQuery;
};

var getAllWordsMustQuery =function(searchText,from,size){
	var searchQuery = null;
	if(!searchText){
		var searchQuery = {
			"fields": ["file.name"],
			"from":from,
			"size":size,
			"query":{}   
		};
	}
	else{
		var searchTextArr = searchText.split(' ');
		var shouldArr = [];
		searchTextArr.forEach(function(text){
			shouldArr.push({ "match": { "file": text }});
		});
		var searchQuery = {
			"fields": ["file.name"],
			"from":from,
			"size":size,
			"query":
		    	{
		        	"match":{
		            	"file":{
		                	"query":searchText,
		                    "minimum_should_match": "30%"
		                 }
		            }
		            /*"bool": {
		              "should": shouldArr,
		              "minimum_should_match": 1 
		            }*/
		        },
		     "rescore": {
		        "window_size": 50, 
		        "query": {         
		            "rescore_query": {
		                "match_phrase": {
		                    "file": {
		                        "query": searchText,
		                        "slop":  50
		                    }
		                }
		            }
		        }
		    },
		  "highlight" : {
		    "fields" : {
		      "file" : {}
		    }
		  }     
		};
	}
	return searchQuery;
};

var indexExists = function(indexName,callback){
	client.indices.exists({
		'index':indexName
	},function(err, response, status){
		callback(err,response,status);
	});
};

var createIndex = function(indexName,indexType,mappingJson,callback){
	var settings = {};
	try{
		indexExists(indexName,function(err,response,status){
			if(!response){
				console.log(indexName,indexType,mappingJson);
				client.indices.create({
						'index':indexName
				},function(err, response, status){
					if(!err){
						createMapping(indexName,indexType,mappingJson,callback);
					}
					else{
						callback(err,response);
					}
				});
			}
			else{
				callback(err,response);
			}
		});
	}
	catch(e){
		console.log(e);
	}
};

var createMapping = function(indexName,indexType,mappingJson,callback){
	client.indices.putMapping({
			"index":indexName,
			"type":indexType,
			"body": mappingJson
		},function(err, response, status){
		//if(!err){
			console.log(2,err);
			callback(err,response);

		//}
		});
};

var addDocsToIndex = function(indexName,type,docs,callback){
	var noOfDocs = docs.length;
	console.log(noOfDocs);
	var pageSize = 100;
	var startIndex = 0;
	var indexObj = { index:  { _index: indexName, _type: type } };
	indexBasedOnPageSize(docs,pageSize,startIndex,indexObj,function(){
		callback();
	});
};

var getArrBasedOnPageSize = function(arr,pageSize,currInd){
	var arrRet = arr.slice(currInd,currInd + pageSize);
	return arrRet;
};

var indexBasedOnPageSize = function(docs,pageSize,startIndex,indexObj,callback){
	
	var noOfDocs = docs.length;
	var batchDocs = getArrBasedOnPageSize(docs,pageSize,startIndex);
	var commands = [];
	
	batchDocs.forEach(function(fileContent){
		commands.push(indexObj);
		commands.push({'file':{"_indexed_chars" : -1,"_content":fileContent.data,"_content_length":fileContent.data.length,"_name":fileContent.path}});
	});
	/*client.bulk(commands, {}).on('data', function(data) {

	})
    .on('done', function(done){
    	if(batchDocs.length < pageSize){
    		callback();
    	}
    	else{
	    	startIndex += pageSize;
	    	indexBasedOnPageSize(docs,pageSize,startIndex,indexObj,callback);
    	}
    })
    .on('error', function(error){
    	if(batchDocs.length < pageSize){
    		callback();
    	}
    	else{
	    	startIndex += pageSize;
	    	indexBasedOnPageSize(docs,pageSize,startIndex,indexObj,callback);
    	}
    })
    .exec();*/

    client.bulk({ body:commands},function(err,resp){
		if(batchDocs.length < pageSize){
    		callback();
    	}
    	else{
	    	startIndex += pageSize;
	    	indexBasedOnPageSize(docs,pageSize,startIndex,indexObj,callback);
    	}
    });
};


module.exports = {
	addDocsToIndex:addDocsToIndex,
	searchTextInDocs:searchTextInDocs,
	createIndex:createIndex,
	indexExists:indexExists
}