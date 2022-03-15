/* 
In this exercise i needed to program the "taximeter" of a new mobility application that calculates, in cents, the amount to be paid by the customer. In this task, given a distance traveled and a travel time, i had to write a program that calculates the price of the trip. It is known that the app must initially charge 50 cents per minute of travel and an additional 70 cents for each kilometer traveled. If the trip is longer than 10km, each additional km (above 10) is cheaper, costing only 50 cents per km. If the trip takes more than 20min, each additional min (above 20) is cheaper, costing only 30 cents per minute. Remember to round down the final amount to be paid.
*/

const min = 25;
const km = 11.5;

let minutePriceTotal = 0;
let kilometerPriceTotal = 0;

if (min > 20) {
  minutePriceTotal = (min - 20) * 30 + 20 * 50;
} else {
  minutePriceTotal = min * 50;
}

if (km > 10) {
  kilometerPriceTotal = (km - 10) * 50 + 10 * 70;
} else {
  kilometerPriceTotal = km * 70;
}

let roundedSumOfTotals = Math.floor(kilometerPriceTotal + minutePriceTotal);

console.log(roundedSumOfTotals);
