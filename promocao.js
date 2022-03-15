/* 
In this exercise i needed to make an algorithm that automatically calculates the amount owed by the customer when applying this promotion when necessary. The promotion is as follows: the customer who buys at least 3 items will receive a 50% discount on the cheapest item.
*/

const prices = [100, 100, 100, 100];

let summation = 0;

let cheaperItem = Math.min(...prices);

prices.map(number => (summation += number));

if (prices.length >= 3) {
  console.log(summation - cheaperItem / 2);
} else {
  console.log(summation);
}


