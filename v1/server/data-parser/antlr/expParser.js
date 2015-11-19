// Generated from exp.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var expListener = require('./expListener').expListener;
var grammarFileName = "exp.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000b;\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\r",
    "\n\u0002\u0003\u0003\u0007\u0003\u0010\n\u0003\f\u0003\u000e\u0003\u0013",
    "\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0017\n\u0003\f\u0003",
    "\u000e\u0003\u001a\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001e",
    "\n\u0003\f\u0003\u000e\u0003!\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0007\u0004&\n\u0004\f\u0004\u000e\u0004)\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004-\n\u0004\f\u0004\u000e\u00040\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u00044\n\u0004\f\u0004\u000e\u00047\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\b\u0011\u0018\u001f\'.5\u0002\u0005",
    "\u0002\u0004\u0006\u0002\u0002>\u0002\f\u0003\u0002\u0002\u0002\u0004",
    "\u0011\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b\r\u0005",
    "\u0004\u0003\u0002\t\n\u0005\u0006\u0004\u0002\n\u000b\u0007\u0002\u0002",
    "\u0003\u000b\r\u0003\u0002\u0002\u0002\f\b\u0003\u0002\u0002\u0002\f",
    "\t\u0003\u0002\u0002\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u0010",
    "\u000b\u0002\u0002\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013",
    "\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0011\u000f",
    "\u0003\u0002\u0002\u0002\u0012\u0014\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0014\u0018\u0007\u0003\u0002\u0002\u0015\u0017",
    "\u000b\u0002\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u001a",
    "\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0018\u0016",
    "\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001b\u001f\u0007\u0004\u0002\u0002\u001c\u001e",
    "\u000b\u0002\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!",
    "\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002\u001f\u001d",
    "\u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002\"#\u0007\u0005\u0002\u0002#\u0005\u0003\u0002\u0002\u0002",
    "$&\u000b\u0002\u0002\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002(*\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*.\u0007\u0005\u0002\u0002",
    "+-\u000b\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/1\u0003\u0002",
    "\u0002\u00020.\u0003\u0002\u0002\u000215\u0007\u0003\u0002\u000224\u000b",
    "\u0002\u0002\u000232\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000268\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000289\u0007\u0004\u0002\u00029\u0007\u0003",
    "\u0002\u0002\u0002\t\f\u0011\u0018\u001f\'.5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ 'null', "EXP_VALUE", "IN_TIME", "EXPERIENCE", "INT", 
                      "DOUBLE", "ALPHANUMERIC", "YEAR", "MONTH", "WS" ];

var ruleNames =  [ "experience", "duration_time_exp", "exp_time_duration" ];

function expParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

expParser.prototype = Object.create(antlr4.Parser.prototype);
expParser.prototype.constructor = expParser;

Object.defineProperty(expParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

expParser.EOF = antlr4.Token.EOF;
expParser.EXP_VALUE = 1;
expParser.IN_TIME = 2;
expParser.EXPERIENCE = 3;
expParser.INT = 4;
expParser.DOUBLE = 5;
expParser.ALPHANUMERIC = 6;
expParser.YEAR = 7;
expParser.MONTH = 8;
expParser.WS = 9;

expParser.RULE_experience = 0;
expParser.RULE_duration_time_exp = 1;
expParser.RULE_exp_time_duration = 2;

function ExperienceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expParser.RULE_experience;
    return this;
}

ExperienceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExperienceContext.prototype.constructor = ExperienceContext;

ExperienceContext.prototype.duration_time_exp = function() {
    return this.getTypedRuleContext(Duration_time_expContext,0);
};

ExperienceContext.prototype.exp_time_duration = function() {
    return this.getTypedRuleContext(Exp_time_durationContext,0);
};

ExperienceContext.prototype.EOF = function() {
    return this.getToken(expParser.EOF, 0);
};

ExperienceContext.prototype.enterRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.enterExperience(this);
	}
};

ExperienceContext.prototype.exitRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.exitExperience(this);
	}
};




expParser.ExperienceContext = ExperienceContext;

expParser.prototype.experience = function() {

    var localctx = new ExperienceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, expParser.RULE_experience);
    try {
        this.state = 10;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.duration_time_exp();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 7;
            this.exp_time_duration();
            this.state = 8;
            this.match(expParser.EOF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Duration_time_expContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expParser.RULE_duration_time_exp;
    return this;
}

Duration_time_expContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Duration_time_expContext.prototype.constructor = Duration_time_expContext;

Duration_time_expContext.prototype.EXP_VALUE = function() {
    return this.getToken(expParser.EXP_VALUE, 0);
};

Duration_time_expContext.prototype.IN_TIME = function() {
    return this.getToken(expParser.IN_TIME, 0);
};

Duration_time_expContext.prototype.EXPERIENCE = function() {
    return this.getToken(expParser.EXPERIENCE, 0);
};

Duration_time_expContext.prototype.enterRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.enterDuration_time_exp(this);
	}
};

Duration_time_expContext.prototype.exitRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.exitDuration_time_exp(this);
	}
};




expParser.Duration_time_expContext = Duration_time_expContext;

expParser.prototype.duration_time_exp = function() {

    var localctx = new Duration_time_expContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, expParser.RULE_duration_time_exp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 12;
                matchWildcard(); 
            }
            this.state = 17;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 18;
        this.match(expParser.EXP_VALUE);
        this.state = 22;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 19;
                matchWildcard(); 
            }
            this.state = 24;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 25;
        this.match(expParser.IN_TIME);
        this.state = 29;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 26;
                matchWildcard(); 
            }
            this.state = 31;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 32;
        this.match(expParser.EXPERIENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Exp_time_durationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expParser.RULE_exp_time_duration;
    return this;
}

Exp_time_durationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Exp_time_durationContext.prototype.constructor = Exp_time_durationContext;

Exp_time_durationContext.prototype.EXPERIENCE = function() {
    return this.getToken(expParser.EXPERIENCE, 0);
};

Exp_time_durationContext.prototype.EXP_VALUE = function() {
    return this.getToken(expParser.EXP_VALUE, 0);
};

Exp_time_durationContext.prototype.IN_TIME = function() {
    return this.getToken(expParser.IN_TIME, 0);
};

Exp_time_durationContext.prototype.enterRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.enterExp_time_duration(this);
	}
};

Exp_time_durationContext.prototype.exitRule = function(listener) {
    if(listener instanceof expListener ) {
        listener.exitExp_time_duration(this);
	}
};




expParser.Exp_time_durationContext = Exp_time_durationContext;

expParser.prototype.exp_time_duration = function() {

    var localctx = new Exp_time_durationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, expParser.RULE_exp_time_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 34;
                matchWildcard(); 
            }
            this.state = 39;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 40;
        this.match(expParser.EXPERIENCE);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 41;
                matchWildcard(); 
            }
            this.state = 46;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 47;
        this.match(expParser.EXP_VALUE);
        this.state = 51;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 48;
                matchWildcard(); 
            }
            this.state = 53;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 54;
        this.match(expParser.IN_TIME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.expParser = expParser;
