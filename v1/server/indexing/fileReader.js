var fs = require('fs');
var path = require('path');

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

var readFilesFromDir = function(dirPath,callback){
	var fileContent = [];
	walk(dirPath,function(err,list){
		if(list && list.length > 0){
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
}

var getFileData = function(path,callback){
	fs.readFile(path,'utf-8',function(err,data){
		if(!err)
			callback(data);
	})
}

module.exports = {
	readFilesFromDir:readFilesFromDir,
	getFileData:getFileData
}