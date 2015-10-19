var searchResultObj = function(data){
	this.resultCount = null;
	this.results = null;
	this.processData(data);
}

searchResultObj.prototype = {
	processData:function(results){
		if(results.status == 200){
			var hits = results.data.hits;
			this.resultCount = hits.total;
			this.results = hits.hits;
		}
	},

	totalCount:function(){
		return this.resultCount;
	},

	each:function(callback){
		if(this.results){
			for(var i=0,l=this.results.length;i<l;i++){
				var hit = this.results[i];
				var fields = hit.fields;
				var hightlightText = hit.highlight.file;
				var json = {
					'path':fields['file.name'],
					'description':hightlightText
				}
				callback(json);
			}
		}
	}
}