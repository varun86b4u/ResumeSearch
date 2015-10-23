var express = require('express');
var router = express.Router();
var docIndex = require('../indexing/docIndex');
var docSearch = require('../search/docSearch');
var fileReader = require('../indexing/fileReader');
var atob = require('atob');
var conf = require('../config/config');

var isEv = atob(conf.ev);
var exp = atob(conf.exp);

router.post('/indexDoc',function(req,res){
	if(!checkEv()){
		var response = {
				status  : 120,
				success : 'Evaluation Version Expired'
			};
		res.end(JSON.stringify(response));
		return;
	}
	console.log('Request Received');
	docIndex.startIndexing(function(){
		console.log('success Received');
		var response = {
				status  : 200,
				success : 'Indexed Successfully'
		};
			
		res.end(JSON.stringify(response));
	})
});

router.post('/createIndex',function(req,res){
	if(!checkEv()){
		var response = {
				status  : 120,
				success : 'Evaluation Version Expired'
			};
		res.end(JSON.stringify(response));
		return;
	}
	docIndex.createIndexAndMapping(function(err,data){
		var response = {
				status  : 200,
				success : 'Indexed created Successfully.'
		};
		if(err){
			response = err;
		}
		res.end(JSON.stringify(response));
	})
});


router.post('/indexExists',function(req,res){
	if(!checkEv()){
		var response = {
				status  : 120,
				success : 'Evaluation Version Expired'
			};
		res.end(JSON.stringify(response));
		return;
	}
	console.log('Request Received');
	docIndex.checkIndexExists(function(err,data){
		console.log('success Received');
		var response = {
				status  : 200,
				success : 'Indexed Exists.',
				data:data
		};
		if(err){
			response = {
				status  : 304,
				success : ''
			};
		}
		res.end(JSON.stringify(response));
	})
});


router.post('/search',function(req,res){
	if(!checkEv()){
		var response = {
				status  : 120,
				success : 'Evaluation Version Expired'
			};
		res.end(JSON.stringify(response));
		return;
	}
	var searchText = req.body.searchText;
	var searchType = req.body.searchType;
	var from = req.body.from;
	var size = req.body.size;
	docSearch.searchDocuments(searchText,searchType,from,size,function(err,data){
		var response = {};
		if(err){
		  response = {
				status  : 304,
				success : ''
			};
		}
		else{
			response = {
				status  : 200,
				success : 'search success',
				data:data
			};
		}
		res.end(JSON.stringify(response));
	});
});

router.get('/doc/:path',function(req,res){
	if(!checkEv()){
		var response = {
				status  : 120,
				success : 'Evaluation Version Expired'
			};
		res.end(JSON.stringify(response));
		return;
	}
	var path  = req.params.path;
	var dest = atob(path);
	//fileReader.getFileData(dest,res);
	res.download(dest);
	//fileReader.createFileStream(path,function(file){
		//res.setHeader('Content-disposition', 'inline;
		//res.download(dest);
	//});
});

var checkEv = function(){
	if(isEv == "true"){
		var dep = new Date(exp);
		var diff = new Date() - dep;
		if(diff > 60){
			return false;
		}
	}
	return true;
};

module.exports = router;