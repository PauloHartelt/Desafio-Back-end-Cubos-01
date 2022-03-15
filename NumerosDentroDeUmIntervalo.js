/* 
In this exercise i needed to create a program to solve all problems of the math's matter intervals, between two numbers. Implement a function that takes three arguments: number, lowerbound and upperbound;
This function should return whether this number belongs to the set that is bounded by lowerbound and upperbound. Print BELONG if this number is bounded by lowerbound and upperbound and DOES NOT BELONG if not.  
*/

const input = [10, 5, 20];

function solution(number, lowerbound, upperbound) {
  if (number >= lowerbound && number <= upperbound) {
    console.log("BELONG");
  } else {
    console.log("DOES NOT BELONG");
  }
}

solution(input[0], input[1], input[2]);
