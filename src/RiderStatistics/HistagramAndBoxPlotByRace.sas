ods noproctitle;
ods graphics / imagemap=on;

/*
 * box and wisker plot of rider terrain statistics for each race
 * histogram of rider terrain statistics for each race
*/

proc univariate data = cycling.riders noprint;
    var flat hill mountain downhill;
histogram;



proc boxplot data = cycling.riders;
	plot flat*race;

proc univariate data = cycling.riders noprint;
	by race;
    var flat;
histogram;



proc boxplot data = cycling.riders;
	plot hill*race;

proc univariate data = cycling.riders noprint;
	by race;
    var hill;
histogram;




proc boxplot data = cycling.riders;
	plot mountain*race;

proc univariate data = cycling.riders noprint;
	by race;
    var mountain;
histogram;




proc boxplot data = cycling.riders;
	plot downhill*race;

proc univariate data = cycling.riders noprint;
	by race;
    var downhill;
histogram;



run;