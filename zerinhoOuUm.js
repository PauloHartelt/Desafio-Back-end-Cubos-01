/*
In this exercise I needed to simulate a game of "zero ou um", in which people playing need to choose between the number zero or one and whoever is the only one to choose one of these numbers is the chosen.
*/

const players = [
  {
    name: "Herman",
    play: 0
  },
  {
    name: "Rhodes",
    play: 0
  },
  {
    name: "Beach",
    play: 0
  },
  {
    name: "Laurel",
    play: 1
  },
  {
    name: "Beatrice",
    play: 0
  },
  {
    name: "Alison",
    play: 0
  },
  {
    name: "Saundra",
    play: 0
  },
  {
    name: "Klein",
    play: 0
  }
];

let zeroCounter = 0;
let oneCounter = 0;
let chosenPlayer;

for (const player of players) {
  if (!player.play) {
    zeroCounter++;
  } else {
    oneCounter++;
  }
}

if (zeroCounter === 1) {
  chosenPlayer = players.filter(number => number.play === 0);
  console.log(chosenPlayer[0].name);
} else if (oneCounter === 1) {
  chosenPlayer = players.filter(number => number.play === 1);
  console.log(chosenPlayer[0].name);
} else {
  console.log("NO ONE");
}