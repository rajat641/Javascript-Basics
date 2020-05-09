/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
/*

*/
var johnScore = [89,120, 103];
var mikeScore = [116,94, 123];

var johnAvgScore = (johnScore[0]+johnScore[1]+johnScore[2])/johnScore.length;
var mikeAvgScore = (mikeScore[0]+mikeScore[1]+mikeScore[2])/ mikeScore.length;

if(johnAvgScore > mikeAvgScore){
	console.log('The winner is John with average score: ' + parseInt(johnAvgScore));
}
else{
	if(johnAvgScore < mikeAvgScore){
	console.log('The winner is Mike with average score: ' + mikeAvgScore);
}
	else{
		console.log('The game is a draw');
	}
}

var maryScore = [97, 134, 105];
var maryAvgScore = (maryScore[0]+maryScore[1]+maryScore[2])/ maryScore.length;

switch(true){
	case maryAvgScore>johnAvgScore && maryAvgScore> mikeAvgScore:
		console.log("Mary is the highest scorer");
		break;
	case johnAvgScore> maryAvgScore & johnAvgScore > mikeAvgScore:
		console.log("John is the highest scorer");
		break;
	case mikeAvgScore> maryAvgScore & johnAvgScore < mikeAvgScore:
		console.log("Mike is the highest scorer");
		break;
	default:
		console.log('There is no clear winner');
}