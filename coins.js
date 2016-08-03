/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
  };

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();