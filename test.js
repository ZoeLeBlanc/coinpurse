/*function coinCounter (num) {
  var coinPurse = {};
    if (num >= 0.25) {
      coinPurse.quarters = Math.floor(num/0.25);
      num = (num - (coinPurse.quarters*0.25));
    }
    if (num >= 0.10 || num <= 0.24) {
      coinPurse.dimes = Math.floor(num/0.10);
      num = (num - (coinPurse.dimes*0.10));
    }
    if (num >= 0.05 || num <=0.09) {
      coinPurse.nickels = Math.floor(num/0.05);
      num = (num - (coinPurse.nickels*0.05));
    }
    if (num >= 0.01 || num <= 0.04) {
      coinPurse.pennies = Math.floor(num/0.01);
      num = (num - (coinPurse.pennies*0.01));
    }
  return coinPurse || (num);
}

var coins = coinCounter(0.67);
console.log(coins);
*/

var coinPurseDOM = document.getElementById("coinPurse");


function coinCounter(money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  money = money*100;

  money = money.toFixed();
  console.log("money", money);

  var remainderQuarters = money % 25;
  coinPurse.quarters = (money - remainderQuarters) / 25;
  var minusQuarters = money - (coinPurse.quarters *25);
  var remainderDimes = minusQuarters % 10;
  coinPurse.dimes = (minusQuarters - remainderDimes) / 10;
  var minusDimes = minusQuarters - (coinPurse.dimes * 10);
  var remainderNickels = minusDimes % 5;
  coinPurse.nickels = (minusDimes - remainderNickels) / 5;
  var minusNickels = minusDimes - (coinPurse.nickels * 5);
  coinPurse.pennies = minusNickels / 1;

  coinPurseDOM.innerHTML += "<li>" + "Quarters: " + coinPurse.quarters + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Dimes: " + coinPurse.dimes + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Nickels: " + coinPurse.nickels + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Pennies: " + coinPurse.pennies + "</li>";

  return coinPurse;
}

var userInput = prompt("List an amount you want divided into coins. (eg: 1.67) ");
var userInputParsed = (parseFloat(userInput));
coinCounter(userInputParsed);