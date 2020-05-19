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

///////////// Lecture: The this keyword///// IMP
//console.log(this)
calage(133);

function calage(year){
	console.log(1999-year)
	console.log(this) // regular function so here this keyword is attached to a global window object
}

var john = {
	name: 'john',
	yearOfBirth:1998,
	calJohnAge: function(){
		console.log(this) // this points to john object
		// function inn(){
		// 	console.log(this) // this here is window object as its not a method. Its a function written inside a method
		// }
		// inn()

	}
}
//john.calJohnAge(334);


var mike = {
	name: 'Mike'
};

// use metho borrowing

mike.calAge = john.calJohnAge;
mike.calAge(132) // this now points to mike object.This demonstrate:"this" varible is not assigned a value until
// a function where it is actually defined is called.
