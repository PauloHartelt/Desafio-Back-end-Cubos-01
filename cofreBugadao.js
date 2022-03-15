/*
In this exercise i needed to fix a broken safe reader. This safe reader would ignore the password entered if it was wrong letters along the way. 
*/

let input = `cubos
ewvelrabsocaeln`;

const words = input.trim().split("\n");
const password = words[0].toLowerCase();
const typed = words[1].toLowerCase();

let counter = 0;

for (let i = 0; i < typed.length; i++) {
  if (typed[i] === password[counter]) {
    counter++;
  }
}

if (counter === password.length) {
  console.log("YES");
} else {
  console.log("NO");
}
