//////////////////////////////
/*HOSITING

*/
///////////////////////

calAge(1999); // this works because of hoisting as fucnction declarations is stored in the VO of the global context


function calAge(year){
	console.log(2020- year);
}



//retirement(1997) // here you'll get an error as hoisting not work for fucntion expression

var retirement = function(year){
	console.log(2000-year)
}




// Variables

console.log(age) // output undefined as they are set to 0
var age = 23;