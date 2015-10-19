var utils = {
	baseUrl:function(){
		return "http://localhost:8080/api";
	},
	getRequest:function(){

	},

	postRequest:function(api,data,callback){
		var request = $.ajax({
		  url: this.baseUrl() + api,
		  method: "POST",
		  data: data,
		  dataType: "json",
		  async:true
		});
		 
		request.done(function( data ) {
		  	callback(data)
		});
		 
		request.fail(function( jqXHR, textStatus ) {
		  //alert( "Request failed: " + textStatus );
		});

	}
}