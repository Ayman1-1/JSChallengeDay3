//! Start Task 1 : Speed run !!
//todo: Question1
const numbers = [2, 3, 6];
function sum(numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s = s + numbers[i];
  }
  return s;
}
console.log(sum(numbers));

// ---------------------------
//todo: Question2
const number = [6, 4, 3, 2, 1];
function countEven(number) {
  let result = 0;
  for (i = 0; i <= number.length; i++) {
    if (number[i] % 2 === 0) {
      result++;
    } else {
      result = result;
    }
  }
  return result;
}
console.log(countEven(number));

// ---------------------------
//todo: Question3
const nombre = [2, 3, 4];
function double(nombres) {
  const newArray = [];
  for (let i = 0; i < nombre.length; i++) {
    newArray.push(nombres[i] * 2);
  }
  return newArray;
}
console.log(double(nombre));
// End Task 1 : Speed run !!

// !Start Task 2 : The pair of socks

const socks = [1, 2, 1, 2, 1, 3, 2];

let pairs = 0;
let sockCounts = {};

// Count the occurrences of each type of sock
for (let i = 0; i < socks.length - 1; i++) {
  let sock = socks[i];
  sockCounts[sock] = (sockCounts[sock] || 0) + 1;
}
let totalPairs = 0;

// Iterate through each sock type in sockCounts
for (let sockType in sockCounts) {
  // Calculate pairs for each sock type and add to the total
  let pairsForType = Math.floor(sockCounts[sockType] / 2);
  totalPairs = totalPairs + pairsForType;
}
// End Task 2 : The pair of socks
