/* 
In this exercise i needed to develop a program to relocating the tables in a room, checking the current position and determine the furthest distance that needs to be walked for a person to reach other person's desk.
*/

const input = `3
0 0
0 3
4 0`;

const lines = input.trim().split("\n");
const n = parseFloat(lines[0], 10);

const coordinates = [];
for (let i = 1; i < lines.length; i++) {
  const coord = lines[i].split(" ");
  coordinates.push({
    x: parseFloat(coord[0], 10),
    y: parseFloat(coord[1], 10)
  });
}

let maximumValue = 0;

for (let slowIndex = 0; slowIndex < coordinates.length; slowIndex++) {
  for (
    let fastIndex = slowIndex + 1;
    fastIndex < coordinates.length;
    fastIndex++
  ) {
    let calculation = Math.hypot(
      coordinates[slowIndex].x - coordinates[fastIndex].x,
      coordinates[slowIndex].y - coordinates[fastIndex].y
    );
    if (calculation > maximumValue) {
      maximumValue = calculation;
    }
  }
}

console.log(maximumValue);