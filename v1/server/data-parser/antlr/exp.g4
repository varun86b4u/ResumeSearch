grammar exp;
experience : duration_time_exp 
		   | exp_time_duration EOF;

duration_time_exp : .*? EXP_VALUE .*? IN_TIME .*? EXPERIENCE; 

exp_time_duration : .*? EXPERIENCE .*? EXP_VALUE .*? IN_TIME; 

EXP_VALUE: INT | DOUBLE | ALPHANUMERIC;
IN_TIME: YEAR | MONTH;


EXPERIENCE : 'experience' | 'exp' | 'experince';
INT : [0-9]+;
DOUBLE : INT+.INT+;
ALPHANUMERIC: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten';
YEAR: 'years' | 'year '| 'yr' | 'yrs';
MONTH: 'months' | 'month' | 'mon' | 'mons';

WS : [' ' | '\t' | '\n' | '\r' | '\f']+ -> skip;