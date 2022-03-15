/*
In this exercise i needed to develop a functionality for a text editor that informs how many words are in the text.
*/
const text = " A       text     ";

let counter = text
  .trim()
  .split(" ")
  .filter(spaces => spaces !== "");

console.log(counter.length);
