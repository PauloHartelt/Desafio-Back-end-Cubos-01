/*
In this exercise I needed to simulate a game of "americano", in which people playing make a circle and each player says a number. After that, one of the players adds up all the numbers played and gets a result. Then he starts counting from 1 to the result, first pointing at himself (and saying loudly and clearly "one"), then at the player immediately to his right (and saying "two"), and so on.
 */

const numbers = [1, 3, 2, 1];

let summation = 0;
let i = 0;
let currentIndex = 0;

numbers.map(number => (summation += number));

for (let index = 0; index < summation; index++) {
  i++;
  currentIndex = i;
  if (i === numbers.length) {
    i = 0;
  }
}
console.log(currentIndex);
