var searchListView = function(){
	this.currentPage = 1;
	this.service = serviceObj;
	this.consts = consts;
}

searchListView.prototype = {
	handleResultObj:function(resultObj,currentPage){
		var self = this;
		var totalCount = resultObj.totalCount();
		this.currentPage = currentPage;
		$(".dummySearchResultContainer").empty();
		this.displayCountHeader(totalCount);
		resultObj.each(this.displaySearchResults.bind(this));
		$('.dummyOpen').unbind('click').bind('click',function(){
			var url = $(this).attr('path');
			self.openDocumentInNewTab(url);
		});
	},

	displayCountHeader:function(totalCount){
		var text = "Page " + this.currentPage + " of " + totalCount + " results";
		$(".dummyListHeader").text(text);
	},

	displaySearchResults:function(jsonData){
		var path = jsonData.path;
		var description = jsonData.description;
		var text = description.join('<br>');
		text = text.replace(/<em>/g,'<strong>');
		text = text.replace(/<\/em>/g,'</strong>');
		var header = description.join(',');
		var base64Path = btoa(path);
		var url = '/api/doc/' + base64Path;
		var html = '<div class="row">' +
				   '<h4 class="col-lg-8 elipsses"><a class="dummyOpen" path="'+url+'">'+header+'</a></h4>'+
				   '</div>'+
				   '<div class="row" style="margin-bottom:10px">'+
			       '<p class="col-lg-12 elipsses">'+text+'</p>'+
				   '</div>';
		$(".dummySearchResultContainer").append(html);
	},

	openDocumentInNewTab:function(url){
		var win = window.open(url, '_blank');
		win.focus();
	}
}