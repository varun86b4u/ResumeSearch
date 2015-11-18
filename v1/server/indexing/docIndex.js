var fileReader = require('./fileReader');
var esIndex = require('../es/esIndex');
var config = require('../config/config');
var mapping = require('./mapping');

var filePath = config.resumeFolderPath;
var indexName = config.es.indexName;
var indexType = config.es.indexType;

var startIndexing = function(callback){
	//callack is passed as soon as file start reading, so that indexing can happen in background
	fileReader.readFilesFromDir(filePath,callback,function(err,fileContentList){
		createIndexAndMapping(function(){
			esIndex.addDocsToIndex(indexName,indexType,fileContentList,function(){
				//callback();
			});
		})
	});
};

var createIndexAndMapping = function(callback){
	esIndex.createIndex(indexName,indexType,mapping,function(err,data){
		callback(err,data);
	});
};

var checkIndexExists = function(callback){
	esIndex.indexExists(indexName,function(err,response,status){
		callback(err,response);
	});
};


module.exports = {
	startIndexing:startIndexing,
	createIndexAndMapping:createIndexAndMapping,
	checkIndexExists:checkIndexExists
}