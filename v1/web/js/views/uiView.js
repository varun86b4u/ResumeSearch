var uiView = function(serviceObj,consts){
	this.service = serviceObj;
	this.consts = consts;
	this.searchListView = new searchListView();
	this.paginationView = new paginationView();
	this.currentPage = 1;
	this.bindEvents();
	this.handleRouteChange();
	this.handleSearchFromHash();
}

uiView.prototype = {
	handleRouteChange:function(){
		 window.onhashchange = function () {
        	this.handleSearchFromHash();
    	 }.bind(this);
	},

	handleSearchFromHash:function(){
		var hashValue = window.location.hash.split('#')[1];
		if(hashValue){
			var vals = hashValue.split('/');
			if(vals && vals.length ==2){
				var searchText = atob(vals[0]);
				var page = vals[1];
				this.currentPage = parseInt(page);
				$(".dummySearchText").val(searchText);
				if(searchText){
					$(".dummyMessage").hide();
					$(".dummyIndexSearch").show();
					$(".dummyNoResults").hide();
					$(document).scrollTop(0);
					this.searchResults(searchText,this.currentPage);
				}
			}
		}
		else{
			var route = btoa('') + '/1';
			window.location.hash = '#' + route;
		}
	},

	bindEvents:function(){
		$(".dummySearchBtn").unbind('click').bind('click',function(){
			var searchText = $(".dummySearchText").val();
			var route = btoa(searchText) + '/1';
			window.location.hash = '#' + route;
		}.bind(this));

		$(".dummySearchText").unbind('keypress').bind('keypress',function(e){
			if (e.keyCode == 13) {
		        // Cancel the default action on keypress event
		        var searchText = $(".dummySearchText").val();
				var route = btoa(searchText) + '/1';
				window.location.hash = '#' + route;
		    }
		}.bind(this));

		$(".dummyReIndexCVs").unbind('click').bind('click',function(){
			$(".dummyReIndexCVs").button('toggle');
			alert("Do not close this window. This will take sometime. Please wait...");
			this.service.startIndexing(function(){
				$(".dummyReIndexCVs").button('toggle');
				alert("ReIndexing Successful. Continue With search.");
			}.bind(this));
		}.bind(this));
	},

	searchResults:function(searchText,page){
		var from = page - 1;
		this.service.searchTextInDocs(searchText,from,this.consts.PAGE_SIZE,function(data){
			var resultObj = new searchResultObj(data);
			if(resultObj.totalCount() == 0){
				$(".dummyIndexSearch").hide();
				$(".dummyNoResults").show();
			}
			else{
				this.handleSearchListView(resultObj,searchText);
				this.handlePaginationView(resultObj,searchText);
			}
		}.bind(this));
	},

	handleSearchListView:function(resultObj){
		this.searchListView.handleResultObj(resultObj,this.currentPage);
	},

	handlePaginationView:function(resultObj,searchText){
		this.paginationView.handlePagination(resultObj,this.currentPage,this.consts.PAGE_SIZE,searchText);
	}
}