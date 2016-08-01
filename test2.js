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
//need input for dollar amount? Should it be another form?

function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {}; 
  input = input.toFixed();
  // need a function to take input, divide by coins and output number of coins in purse
   coinPurse.quarters = Math.floor(input/0.25);
   coinPurse.dimes = Math.floor(input/0.10);
   coinPurse.nickels = Math.floor(input/0.05);
   coinPurse .pennies = Math.floor(input/0.01);
   while (input != 0){
      if (input%25){
        input = (input - (coinPurse.quarters*0.25));
      } else if (input % 10){
        input = (input - (coinPurse.dimes*0.1));
      } else if (input%5) {
        input = (input - (coinPurse.nickels*0.05));
      } else if (input%1){
        input = (input - (coinPurse.pennies)*0.01);
      }
    }
  console.log(coinPurse);
  return coinPurse;
}

// Is coins the input variable?
var coins = coinCounter(1.99);
console.log(coins);