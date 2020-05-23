/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer;

score = [0, 0];
roundScore = 0;
activePlayer= 0;


//dice = Math.floor(Math.random()*6) + 1 // gives a number between 0 and 1
 //console.log(dice)

 // document object gives access to DOM
 //document.querySelector('#current-'+activePlayer).textContent = dice 
 // text content just put text not HTML
// if we have to put some HTML as well in some element , we use inner HTML
//document.querySelector('#current-'+activePlayer).innerHTML =  '<em>'  + dice + '</em>'
// HTML <em> tag marks text that has stress emphasis which traditionally means 
//that the text is displayed in italics by the browser

// read varible/ content from an ID from HTML
// reads global score
var x = document.querySelector('#score-0').textContent;
console.log(x)


// set all inital score to 0
document.getElementById('score-0').textContent  = '0'
document.getElementById('score-1').textContent  = '0'
document.getElementById('current-0').textContent  = '0'
document.getElementById('current-1').textContent  = '0'

// we can use query selector to change CSS
// hide dice at beginning so we set display property to None

// querySelector('.class')   querySelector('#id')

//CSS
// property:value
// here we change CSS through query seelctor
document.querySelector('.dice').style.display = 'none';

// events handler 
// on button roll

// /}
//document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function(){

  //1. Random Number
  var dice = Math.floor(Math.random()*6) + 1 // we can't access varibles in scope of other functions

  //2. Display the result
  var diceDOM =document.querySelector('.dice');
  // show dice image based on dice number
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-'+ dice + '.png'
  

  //3. update the round score IF rolled number was not a 1
  // != do type coersion
  if(dice !== 1){
  	// Add score
  	roundScore+=dice;
  	document.querySelector('#current-'+ activePlayer).textContent =roundScore;

  }else{
  	// next player turn
  	activePlayer = activePlayer == 1 ? 0:1; // ternary operator
  	roundScore = 0; // reset round score


  	document.getElementById('current-0').textContent = '0';
  	document.getElementById('current-1').textContent = '0';
  	// as soon as player changes, we add active class to new player and remove it from previous player
  	// we can add.remove classes in Javascript to style it
  	// only works if active player is 1
  	//document.querySelector('.player-0-panel').classList.remove('active');
  	//document.querySelector('.player-1-panel').classList.add('active')
  	

  	// use toggle i.e add a class if not present or remove if already present
  	document.querySelector('.player-0-panel').classList.toggle('active');
  	document.querySelector('.player-1-panel').classList.toggle('active')

  	// hide dice if player score is 1
  	document.querySelector('.dice').style.display = 'None';


  }

});