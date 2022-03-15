/* 
In this exercise i needed to write a program that calculates the total accumulated in a vault.
*/
const array = [1, 2, 3, 4];

let numbersSum = 0;

for (const number of array) {
  numbersSum += number;
}

console.log(numbersSum);
