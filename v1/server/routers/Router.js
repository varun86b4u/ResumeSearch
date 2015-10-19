var express = require('express');
var router = express.Router();
var docIndex = require('../indexing/docIndex');
var docSearch = require('../search/docSearch');
var fileReader = require('../indexing/fileReader');
var atob = require('atob');

router.post('/indexDoc',function(req,res){
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
	console.log('Request Received');
	docIndex.createIndexAndMapping(function(err,data){
		console.log('success Received');
		var response = {
				status  : 200,
				success : 'Indexed created Successfully Successfully'
		};
		if(err){
			response = err;
		}
		res.end(JSON.stringify(response));
	})
});


router.post('/indexExists',function(req,res){
	console.log('Request Received');
	docIndex.checkIndexExists(function(err,data){
		console.log('success Received');
		var response = {
				status  : 200,
				success : 'Indexed created Successfully Successfully',
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
	var path  = req.params.path;
	var dest = atob(path);
	//fileReader.createFileStream(path,function(file){
	res.download(dest);
	//});
});

module.exports = router;