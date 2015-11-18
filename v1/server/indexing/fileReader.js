var fs = require('fs');
var path = require('path');
var mime = require('mime');
var conf = require('../config/config');
var atob = require('atob');

var isEv = atob(conf.ev);
var mic = parseInt(atob(conf.mic),10);
//var expHandler = require('./expHandler');


var readFileInBatch = function(pageSize,startIndex,callback,list,fileContent,sucessCallback){

	var list1 = list.slice(startIndex,startIndex+pageSize);
	console.log('list1', list1.length,list.length,startIndex,pageSize);
    readFilesFromList(list1,function(err,content){
    	fileContent = fileContent.concat(content);
    	console.log(fileContent.length,list.length);
    	if(fileContent.length == list.length){
    		callback(null,fileContent);
    	}
    	else{
    		if(sucessCallback){
    			sucessCallback();
    		}
    		startIndex = startIndex + list1.length;
    		console.log(startIndex,list.length);
    		readFileInBatch(pageSize,startIndex,callback,list,fileContent);
    	}
    });
}

var readFilesFromList = function(list,callback){
	var fileContent = [];
	console.log('list1', list.length);
	list.forEach(function(filePath){
		try{

			getFileBase64String(filePath,function(data,err){
				if(err){
					data = "";
				}
				var content = {
					'path':filePath,
					'data':data
				}
				fileContent.push(content);
				if(fileContent.length == list.length){
					console.log('list1', list.length);
					callback(null,fileContent);
				}
			});
	     }
	     catch(e){
	     	var content = {
				'path':filePath,
				'data':""
			}
			fileContent.push(content);
			if(fileContent.length == list.length){
				callback(null,fileContent);
			}
	     }
	});
}
var getFileBase64String = function(filePath,callback){
	fs.readFile(filePath,'base64',function(err,data){
		//if(!err){
			//console.log(filePath);
			//new expHandler().parse(data);
			callback(data,err);
		//}
	})
}

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

var cntRestrict = function(list){
	var list1 = list;
	if(isEv == "true"){
		if(list.length > mic){
			list1 = list.slice(0,mic);
		}
	}
	return list1;
};

var readFilesFromDir = function(dirPath,sucessCallback,callback){
	var fileContent = [];
	walk(dirPath,function(err,list){
		if(list && list.length > 0){
			list = cntRestrict(list);
			var pageSize = 500;
			readFileInBatch(pageSize,0,callback,list,fileContent,sucessCallback);
		}
	});
};

var getFileData = function(path,res){
	  /*var stream = fs.createWriteStream(path);
	  var filename = "WhateverFilenameYouWant.doc"; 
	  // Be careful of special characters

	  filename = encodeURIComponent(filename);
	  // Ideally this should strip them
	  var mimeType = mime.lookup(path);
	  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
	  res.setHeader('Content-type', mimeType);

	  res.pipe(stream);*/
	 var mimeType = mime.lookup(path);
	  fs.readFile(path, function (err,data){
	     res.contentType(mimeType);
	     res.send(data);
	  });
};

var removeFile = function(path,callback){
	fs.unlinkSync(path);
};

module.exports = {
	readFilesFromDir:readFilesFromDir,
	getFileData:getFileData,
	removeFile:removeFile
}