/*
In this exercise i needed to create a program to correct when the user fill out a form with caps lock key active. It consider that a word was written with caps lock if or all its letters are uppercase or if the first letters are lowercase and all the others uppercase.
*/

const input = " Normal ";

let word = input.trim();
let newWord = "";
let isThatCapslock = false;

if (word === word.toUpperCase()) {
  console.log(word.toLowerCase());
  isThatCapslock = true;
}

if (
  word[0] === word[0].toLowerCase() &&
  word.slice(1) === word.slice(1).toUpperCase()
) {
  newWord =
    word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  isThatCapslock = true;
  console.log(newWord);
}

if (!isThatCapslock) {
  console.log(word);
}
