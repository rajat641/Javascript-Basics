// function constructor -> wayt to create objects in JS
// similar to classes

// var john  = {
// 	name: 'John',
// 	dob : 1990
// };

// try to keep the first character of  a name as capital
// People not people
// var Person = function(name, dob, job){
// 	this.name = name;
// 	this.dob = dob;
// 	this.job = job;
// }


// // this methos will be access by methods
// Person.prototype.findAge = function(argument){
// 	// body... 
// 	console.log(2020-this.dob)
// };
// Person.prototype.lastName = "Smith";


// var john = new Person('John', 1990, 'teacher')

// // with new an empty object is created. 
// // then fucntion person is called and when we call
// // a new function a new execution context is created and 
// // this var is created.

// // VVVVIIIP
// // in a global function, this var points to window object
// // now , this var  points t the empty object created by new .

// john.findAge()
// console.log(john.lastName)
//////////////////////////////////////////////////////////////////////
/* Object.create()
*/

// var personProto = {
// 	calculateAge: function(){
// 		console.log(2016-  this.dob);
// 	}
// }
//  var john = Object.create(personProto);
//  john.name = 'John';
//  john.dob = 1990;

//  var jane = Object.create(personProto, {
//  	name:{value: 'Jane'},
//  	dob:{value:1960}
//  });
/////////////////////////////////////////////////////////////////

// Primitives vs object////////////////////////////////////////////////////

//  var a = 23;
//  var  b = a;
//  a = 46;
//  console.log(a);
//  console.log(b)
// //////////////////////////////////////////


// // objects
// var obj1 = {
// 	name : 'John',
// 	age : 26
// };

// var obj2 = obj1;

// obj2.age = 30;

// console.log(obj1.age)
// console.log(obj2.age)
// // obj2 just hold the reference

// // Functions

// var age = 27;
// var obj = {
// 	name:'Jonas',
// 	city: 'San Francisco'
// }

// function change(a, b){
// 	a = 30;
// 	b.city = 'New Delhi'

// }
// change(age, obj)
// console.log(age); // won't change
// console.log(obj.city); // change

//////////////////////////////////////////////////////////////////////

////// PASSING A FUNCTION AS ARGUMENT//////////////////////////////
var years = [1990, 1883, 1999, 2017];

function arrayCacl(arr, fn){

	var arrRes = [];
	for(let i=0;i< arr.length;i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;

}

// define calabck function

function calAge(el){
	return 2016- el;
}

var ages = arrayCacl(years, calAge);
console.log(ages)

//////////////////// function returning another function////////

function interviewQues(job){
	if(job==='designer'){
		return function(name){
			console.log(name+ ' can you please explain this?')
		}
	}else if(job==='teacher'){
		return function(name){
			console.log(name+ ' can you please explain this?')
		}
	}
}

var quues= interviewQues('designer')

quues('John')
