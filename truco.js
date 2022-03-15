/* 
In this exercise i needed to develop a program that tells what is the "stronger" card, given a face up card. Truco is very popular card game in Brazil that have a order of "strength", with 3 being the "strongest" card and Q the "weakest" card.
*/

let faceUpCard = "3";

let arrayOfCards = ["Q", "J", "K", "A", "2", "3"];
function ifCard(cardValue, strongerCard) {
  if (cardValue === "3") {
    console.log("Q");
  } else if (strongerCard.includes(cardValue)) {
    let strongerCardIndex = strongerCard.indexOf(cardValue);
    console.log(`${strongerCard[strongerCardIndex + 1]}`);
  }
}

ifCard(faceUpCard, arrayOfCards);

