var fs = require('fs');
var path = require('path');
var mime = require('mime');
var conf = require('../config/config');
var atob = require('atob');

var isEv = atob(conf.ev);
var mic = parseInt(atob(conf.mic),10);

var getFileBase64String = function(filePath,callback){
	fs.readFile(filePath,'base64',function(err,data){
		if(!err)
			callback(data);
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

var readFilesFromDir = function(dirPath,callback){
	var fileContent = [];
	walk(dirPath,function(err,list){
		if(list && list.length > 0){
			list = cntRestrict(list);
			list.forEach(function(filePath){
				getFileBase64String(filePath,function(data){
					var content = {
						'path':filePath,
						'data':data
					}
					fileContent.push(content);
					if(fileContent.length == list.length){
						callback(null,fileContent);
					}
				});
			});
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