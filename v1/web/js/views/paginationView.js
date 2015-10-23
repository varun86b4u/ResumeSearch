var paginationView = function(){
	this.totalCount = 0;
	this.currentPage = 0;
	this.pageSize = 0;
	this.searchText = '';
}

paginationView.prototype = {
	handlePagination:function(resultObj,currentPage,pageSize,searchText){
	 	this.totalCount = resultObj.totalCount();
		this.currentPage = currentPage;
		this.pageSize = pageSize;
		this.searchText = btoa(searchText);
		this.handlePaginationUI();
		//this.bindUIEvents();
	},

	handlePaginationUI:function(){
		var noOfPages = Math.ceil(this.totalCount/this.pageSize);
		$('.dummyPaginationContainer').empty();

		var pageArr = [];
		for(var i=this.currentPage;i>0;i--){
			pageArr.push({'page':i,'active':(i==this.currentPage)});
			if(pageArr.length >= 5){
				break;
			}
		}
		pageArr = pageArr.reverse();
		if(pageArr.length < 5){
			for(var i=this.currentPage+1;i<=noOfPages;i++){
				pageArr.push({'page':i,'active':(i==this.currentPage)});
				if(pageArr.length >= 5){
					break;
				}
			}
		}
		this.createPaginationUI(pageArr,noOfPages);
	},

	createPaginationUI:function(pageArr,totalPages){
		var html = "";
		html += '<li '+ (this.currentPage == 1?'class="disabled"':'class="dummyPreviousPage"') +' ><a '+(this.currentPage != 1?'href="#'+this.searchText+'/'+(this.currentPage -1)+'"':'')+'>«</a></li>';
		for(var i=0;i<pageArr.length;i++){
			html += '<li '+ (pageArr[i].active?'class="active"':'class="dummyPageIndex"') + ' page="'+ pageArr[i].page +'"><a '+(!pageArr[i].active?'href="#'+this.searchText+'/'+pageArr[i].page+'"':'')+'>'+pageArr[i].page+'</a></li>';
		}
		html += '<li '+ (this.currentPage == totalPages || totalPages <= 5?'class="disabled"':'class="dummyNextPage"') +' ><a '+(this.currentPage != totalPages || totalPages > 5?'href="#'+this.searchText+'/'+(this.currentPage +1)+'"':'')+'>»</a></li>';
		$('.dummyPaginationContainer').append(html);
	},

	bindUIEvents:function(callback){
		$(".dummyPreviousPage").unbind('click').bind('click',function(){
			callback(this.currentPage-1);
		});

		$(".dummyNextPage").unbind('click').bind('click',function(){
			callback(this.currentPage+1);
		});

		$(".dummyPageIndex").unbind('click').bind('click',function(){
				var page = $(this).attr('page');
				callback(page);
		});
	}
}