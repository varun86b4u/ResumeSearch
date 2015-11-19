// Generated from exp.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by expParser.
function expListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

expListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
expListener.prototype.constructor = expListener;

// Enter a parse tree produced by expParser#experience.
expListener.prototype.enterExperience = function(ctx) {
};

// Exit a parse tree produced by expParser#experience.
expListener.prototype.exitExperience = function(ctx) {
};


// Enter a parse tree produced by expParser#duration_time_exp.
expListener.prototype.enterDuration_time_exp = function(ctx) {
};

// Exit a parse tree produced by expParser#duration_time_exp.
expListener.prototype.exitDuration_time_exp = function(ctx) {
};


// Enter a parse tree produced by expParser#exp_time_duration.
expListener.prototype.enterExp_time_duration = function(ctx) {
};

// Exit a parse tree produced by expParser#exp_time_duration.
expListener.prototype.exitExp_time_duration = function(ctx) {
};



exports.expListener = expListener;