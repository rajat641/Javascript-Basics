/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer= 1;


dice = Math.floor(Math.random()*6) + 1 // gives a number between 0 and 1
 console.log(dice)

 // document object gives access to DOM
 //document.querySelector('#current-'+activePlayer).textContent = dice 
 // text content just put text not HTML
// if we have to put some HTML as well in some element , we use inner HTML
document.querySelector('#current-'+activePlayer).innerHTML =  '<em>'  + dice + '</em>'
// HTML <em> tag marks text that has stress emphasis which traditionally means 
//that the text is displayed in italics by the browser

// read varible/ content from an ID from HTML
var x = document.querySelector('#score-0').textContent;
console.log(x)

// we can use query selector to change CSS
// hide dice at beginning so we set display property to None

// querySelector('.class')   querySelector('#id')

//CSS
// property:value
document.querySelector('.dice').style.display = 'none';
