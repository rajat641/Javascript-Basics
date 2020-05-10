/*
Varibles and data types


var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);


var job;
console.log(job);

*/

/*****
Varible mutation and type coercion


var firstName = 'John';
var age = 28;

console.log("1"+age);

var job , isMarried;
job ='teacher';
isMarried = false;

console.log(firstName+'is a'+ age+ 
	'year old'+ job+'.'+ 'Is he'+ isMarried);

// var mutation
 age = 'twenty eight'; // no need to define it again like var age etc


alert(firstName+'is a'+ age+ 
	'year old'+ job+'.'+ 'Is he'+ isMarried);
// ask user an imput
var lastName =prompt('Whats his name ??');
console.log(firstName+"-"+lastName);

*/

/***************************
Basic Operators

//Math = +/-

//Basic Math Operators
var year = 2018
var yearJohn = year - 28;
var yearMark = year - 33

console.log(yearJohn);
var now  = 2020

console.log(now+ 2)
console.log(now*2)
console.log(now/10)

// Logical Operators

var ageJohn = 28;
var johnolder = ageJohn> 30;
console.log(johnolder);

//typeof operator

console.log(typeof johnolder)
console.log( typeof ageJohn)

var x;
console.log(typeof x); // undefined type

*/

/**
Operator Precendence
**/

// var now = 2018;
// var yearJohn = 1988;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; // +- has higher precendemce that >= operator
// // we have 3 operators now : =, - , >=
// console.log(isFullAge);

// // Multiple Assignment

// var x, y;
// x = y = (3+7)*2; // Assignment works from R-> L
// console.log(x, y); // console for 2 variables

// // More operator

// x*=2 //x=  x*2
// console.log(x)

// x+=10
// console.log(x)

// x+=1 // x++
// console.log(x)
// x--; // x-=1
// console.log(x)

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
/*
*/
// we can use prompt() also to take use inputs

// var markWeight = 12 //kg  
// var markHeight= 1.66 // meters;

// var johnWeigh=10 ;
// var johnHeight = 1.24;

// var bmiMark = markWeight / markHeight * markHeight
// var bmiJohn = johnWeigh / johnHeight * johnHeight

// if (bmiMark > bmiJohn){
// 	console.log("Yes, Mark BMI is more.");
// }else{
// 	console.log("No, Mark BMI is not more.");
// }

/******
If else statement
********/
 // var civilStatus = 'Single';

 // if(civilStatus === 'Married'){
 // 	console.log('Yes , He is married');
 // }else{
 // 	console.log('He will marry soon!!....')
 // }
 // var age = 16;
 // if(age>=20 && age<=50) console.log('He is a Man');
 // else {
 // 	console.log('He is a boy')
 // }

/**********
Ternary Operator
**/

// var name = 'John'
// var age = 16

// age >=18 ? console.log(name+ " can drink beer"): console.log('He can\'t drink beer');

/**** SWITCH STATEMENTS
******/

// var job = 'teacher'
//  switch (job){
//  	case 'teacher':
//  		console.log('the job is a teacher')
//  		break
//  	case default:
//  		console.log('Job is not known')
//  }


// falsy values : undefined, null, 0, '', Nan// not a number
// truthy vakues : NOT falsy values

// var height;

// if(height){
// 	console.log('varibale is defined')
// }else{
// 	console.log('Variable is not defined')
// }

/**** function in JS
***/
// go('Rajat', 23);
// function go(name , age){
// 	alert('the name is: ' + name +' age is '+ age);
// }

/*** function statements
**/
// fxn declaration
 // function whatYouDo{

 // }


// function expression
// var whatYouDo = function(job, firstName) {
// 	switch(job){
// 		case 'teacher':
// 			return firstName +' is a teacher';
// 		case ' driver':
// 			return firstName +' is a driver'; 
// 		default:
// 			return firstName + ' is something';
// 	}

// }
// console.log(whatYouDo('teacher','Rajat'));

/***
Arrays
**/

// var names = ['John', 'Mark', 'Jane'];

// var years = new Array(1990, 1969);// not much used

// names[4]='Raj';
// names[names.length]=1;

// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// // method specific to arrays
// names.push('BLUE'); // push at end
// console.log(names)
// names.unshift('Mr'); // insert at front

// names.pop(); // remove from end;
// names.shift();// remove from front
// var dup = [1,2,3,2];
// console.log(names);
// console.log('Hi')
// console.log(dup.indexOf(2));
// var names = ['Rajat', 'Arun', 'Suresh', 'Pop'];
// console.log(names.sort())

/** object and properties
**/
 var names={
 	firstName :'John',
 	lastName : 'Sing',
 	family : ['Jane', 'Mark'],
 	isMarried: false,
 	profession: function(){
 		return this.firstName;
 	}
 };
console.log(names);
console.log(names.firstName);
console.log(names.profession())





















