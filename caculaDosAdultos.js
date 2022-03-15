/* 
In this exercise i needed to create a program that determines the age of the youngest person among those who can participate (of age) in a list with the ages of potential participants.
*/

const array = [12, 27, 18];

let newArray = array.filter(number => number >= 18);

let minimunAge = Math.min(...newArray);

if (minimunAge === Infinity) {
  console.log("RISE AND SHINE");
} else {
  console.log(minimunAge);
}

