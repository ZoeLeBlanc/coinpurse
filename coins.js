
var printPurse = document.getElementById("coinPurse");
//var userCoins = document.getElementById("userCoins");
function coinCounter(input) {
	var coinPurse = {};
		if(input % 0.25) {
			coinPurse.quarters = parseInt(input/0.25);
			input = (input - (coinPurse.quarters * 0.25));
		}
		if (input % 0.1) {
			coinPurse.dimes = parseInt(input/0.1);
			input = (input - (coinPurse.dimes * 0.1));
		} 
		if (input % 0.05) {
			coinPurse.nickels = parseInt(input/0.05);
			input = (input - (coinPurse.nickels * 0.05));
		}
		if (input % 0.01) {
			coinPurse.pennies = parseInt(input/0.01);
			input = (input - (coinPurse.pennies * 0.01));
		}
	console.log(coinPurse);
	printPurse.innerHTML += "<div>" + "You have " + coinPurse.quarters + " quarters." + "</div>";
	printPurse.innerHTML += "<div>" + "You have " + coinPurse.dimes + " dimes." + "</div>";
	printPurse.innerHTML += "<div>" + "You have " + coinPurse.nickels + " nickels." + "</div>";
	printPurse.innerHTML += "<div>" + "You have " + coinPurse.pennies + " pennies." + "</div>";
	return coinPurse;
}
var coins = prompt("Enter a dollar amount. Like 4.99");
coinCounter(coins);
