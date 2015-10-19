var esIndex = require('../es/esIndex');
var config = require('../config/config');

var searchDocuments = function(searchText,searchType,from,size,callback){
	esIndex.searchTextInDocs(config.es.indexName,config.es.indexType,searchText,searchType,from,size,function(err,data){
		callback(err,data);
	});
}

module.exports = {
	searchDocuments:searchDocuments
}