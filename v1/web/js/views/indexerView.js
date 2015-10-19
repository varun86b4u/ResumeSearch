var indexerView = function(serviceObj,callback){
	this.serviceObj = serviceObj;
	this.cb = callback;
	this.isIndexExist(function(flgExist){
		this.handleUIBasedOnIndexExist(flgExist);
		this.handleIndexCreation(flgExist);
	}.bind(this));
};
indexerView.prototype = {
	isIndexExist:function(cb){
		this.serviceObj.indexExists(function(flgExist){
			cb(flgExist);
		});
	},

	handleIndexCreation:function(flgExist){
		if(!flgExist){
			$(".dummyIndexCVs").unbind('click').bind('click',function(){
				this.serviceObj.startIndexing(function(){
					this.handleUIBasedOnIndexExist(true);
				}.bind(this));
			}.bind(this));
		}
	},

	handleUIBasedOnIndexExist:function(flgExist){
		if(flgExist){
			$(".dummyIndexErrorMessage").hide();
			$(".dummySearchMessage").show();
			$(".dummyMessage").show();
			$(".dummySearchContainer").show();
			this.cb();
		}
		else{
			$(".dummyIndexErrorMessage").show();
			$(".dummySearchMessage").hide();
			$(".dummySearchContainer").hide();
		}
	}

}
