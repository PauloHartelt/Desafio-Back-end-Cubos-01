/* 
In this exercise i needed to develop a program that selects from a list of values ​​only those that are allowed to play at a given poker table. At the poker table there is a minimum amount of money you need to have in order to play at that table and a maximum amount.
*/

const min = 2;
const max = 10;
const values = [0, 5, 6, 10, 11];

let valuesToSearch = [];

for (const value of values) {
  if (value >= min && value <= max) {
    valuesToSearch.push(value);
  }
}

console.log(valuesToSearch);
