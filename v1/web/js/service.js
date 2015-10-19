var serviceObj = {
	searchTextInDocs:function(searchText,from,size,callback){
		var data = {
			'searchText':searchText,
			'searchType':1,
			'from':from,
			'size':size
		};
		utils.postRequest('/search',data,callback);
	},

	indexExists:function(callback){
		utils.postRequest('/indexExists',{},function(res){
			if(res.status == 200){
				callback(res.data);
			}
			else{
				callback(false);
			}
		});
	},

	startIndexing:function(callback){
		utils.postRequest('/indexDoc',{},function(res){
			if(res.status == 200){
				callback(res.data);
			}
			else{
				callback(false);
			}
		});
	}
}