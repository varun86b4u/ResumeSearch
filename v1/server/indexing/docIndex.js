var fileReader = require('./fileReader');
var esIndex = require('../es/esIndex');
var config = require('../config/config');
var mapping = require('./mapping');

var filePath = config.resumeFolderPath;
var indexName = config.es.indexName;
var indexType = config.es.indexType;

var startIndexing = function(callback){
	fileReader.readFilesFromDir(filePath,function(err,fileContentList){
		createIndexAndMapping(function(){
			esIndex.addDocsToIndex(indexName,indexType,fileContentList,function(){
				callback();
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