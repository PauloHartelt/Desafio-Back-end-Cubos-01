/* 
In this exercise i needed to make a program that calculates how much has been accumulating, on average, per day.
*/
const array = [2, 3, 4];

let summation = 0;

for (const number of array) {
  summation += number;
}

console.log(summation / array.length);
