var antlr4 = require('antlr4/index');
var DefaultErrorStrategy = require('antlr4/error/ErrorStrategy').DefaultErrorStrategy;
var expParseListener = require('./expParserListener').expParseListener;
var Lexer = require('./antlr/expLexer').expLexer;
var Parser = require('./antlr/expParser').expParser;


function expParser(){

}

expParser.prototype.parse = function(query, cbOnExecuteComplete){
	try{	
		var chars = new antlr4.InputStream(query);
		var lexer = new Lexer(chars);
		var tokens  = new antlr4.CommonTokenStream(lexer);
		var parser = new Parser(tokens);
		parser._errHandler = new DefaultErrorStrategy();
		parser.buildParseTrees = true;
	     
		var tree = parser.experience();

		var queryListener = new expParseListener(cbOnExecuteComplete);

		antlr4.tree.ParseTreeWalker.DEFAULT.walk(queryListener, tree);
	}
	catch(e){
		console.log(e);
	}	
}

function cbOnExecuteComplete(){

}

module.exports = expParser;