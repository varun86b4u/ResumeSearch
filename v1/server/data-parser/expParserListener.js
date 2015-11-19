var expParseListenerBase = require('./antlr/expListener').expListener;

function expParseListener(cbOnExitQuery){
	expParseListenerBase.call(this);
	this.cbOnExitQuery = cbOnExitQuery;
	return this;
}

expParseListener.prototype = Object.create(expParseListenerBase.prototype);
expParseListener.constructor = expParseListener;

expParseListener.prototype.enterExperience = function(ctx){
	this.memory = {};
	console.log('enter query');
}

expParseListener.prototype.exitExperience = function(ctx){
	this.cbOnExitQuery({
		success: true, 
		data : this.memory});
	console.log('exit query');
}

// Enter a parse tree produced by expParser#duration_time_exp.
expParseListener.prototype.enterDuration_time_exp = function(ctx) {

	//console.log(ctx.EXP_VALUE(),"enter_Time_exp");
};

// Exit a parse tree produced by expParser#duration_time_exp.
expParseListener.prototype.exitDuration_time_exp = function(ctx) {
	var spec1 = ctx.EXP_VALUE();
	
	console.log(spec1.getText(),"exit_time_exp");
};


// Enter a parse tree produced by expParser#exp_time_duration.
expParseListener.prototype.enterExp_time_duration = function(ctx) {
	//console.log(ctx.EXP_VALUE(),"enter_Time_Dur");
};

// Exit a parse tree produced by expParser#exp_time_duration.
expParseListener.prototype.exitExp_time_duration = function(ctx) {
	//console.log(ctx.EXP_VALUE(),"exit_Time_Dur");
	var spec1 = ctx.EXP_VALUE();
	console.log(spec1.getText(),"exit_Time_Dur");
};

exports.expParseListener = expParseListener;