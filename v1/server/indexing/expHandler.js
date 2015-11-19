var expParser = require('../data-parser/expParser');
var atob = require('atob');

var expHandler = function(callback){
	this.callback = callback;
	this.strArr = [];
	this.results = [];
}

expHandler.prototype = {
	parse:function(data){
		var expStrArr = this.getExperienceStrings(data);
		this.strArr = expStrArr;
		expStrArr.forEach(function(str,index){
			this.tryParseStrings(str);
		}.bind(this));
	},

	getExperienceStrings:function(data){
		var str = atob(data);
		var expStrArr = [];
		str = this.removeSpecialCharacters(str);
		var guesses = ["experience","exp"];
		guesses.forEach(function(guess){
			var index = str.indexOf(guess);
			while(index >= 0) {
			   expStrArr.push(str.substring(index - 40 ,index + 40));
			   index = str.indexOf(guess, index+1);
			}
		});
		console.log(expStrArr,'test');
		return expStrArr;
	},

	tryParseStrings:function(str){
		new expParser().parse(str,function(result){
			this.results.push(result);
			if(this.results.length === this.strArr.length){
				this.handleParseResults();
			}
		}.bind(this));
	},

	handleParseResults:function(){

	},

	removeSpecialCharacters: function(orgString){
		var str = orgString.toLowerCase();
		str = str.replace(/\\/g, "").replace(/'/g, "").replace(/\t/g, " ");
		str = str.replace(/:/g, "").replace(/‘/g, "").replace(/”/g, "").replace(/“/g, "");
		str = str.replace(/’/g, "").replace(/-/g, " ");
		str = str.replace(/\r\n/g, " ").replace(/\n/g, " ").replace(/\r/g, " ").replace(/\\\\/g, "");
		str = str.replace(/\f/g, "");
		return str;
	}

}

module.exports = expHandler;