ods noproctitle;
ods graphics / imagemap=on;

/*
 *Rider stats grouped by race
*/

/*
proc print data=cycling.riders;
	by race;
	var flat hill mountain downhill;
*/

/*
 * ====================================
*/

/*
 * Summary statistics table grouped by race
*/

/*
proc means data=CYCLING.RIDERS chartype mean std min max median n var mode 
		range vardef=df q1 q3 qmethod=os;
	var flat hill mountain downhill;
	class race;
*/

/*
 * ====================================
*/

/*
 * box and wisker plot of rider terrain statistics for each race
*/

/*
proc sgplot data=CYCLING.RIDERS;
	vbox flat / category=race;
	yaxis grid;
proc sgplot data=CYCLING.RIDERS;
	vbox hill / category=race;
	yaxis grid;
proc sgplot data=CYCLING.RIDERS;
	vbox mountain / category=race;
	yaxis grid;
proc sgplot data=CYCLING.RIDERS;
	vbox downhill / category=race;
	yaxis grid;
*/

/*
 * ====================================
*/

/*
 * distrobution statistics about rider terrain statistics grouped by race
 * histogram of rider terrain statistics grouped by race
*/

/*
proc univariate data = cycling.riders;
	by race;
    var flat hill mountain downhill;
histogram;
*/

/*
 * ====================================
*/

run;