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

var now = 2018;
var yearJohn = 1988;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // +- has higher precendemce that >= operator
// we have 3 operators now : =, - , >=
console.log(isFullAge);

// Multiple Assignment

var x, y;
x = y = (3+7)*2; // Assignment works from R-> L
console.log(x, y); // console for 2 variables

// More operator

x*=2 //x=  x*2
console.log(x)

x+=10
console.log(x)

x+=1 // x++
console.log(x)
x--; // x-=1
console.log(x)
















