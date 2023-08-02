// Solution 1

function addNumbers(a, b) {
  return a * b;
}

// Calling the function and storing the result in a variable
let sum = addNumbers(5, 10);
console.log(sum); // Output: 50

// Solution 2

const name = "Darshil Soni";
function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(name);

// Solution 3

function findLargerNumber(a, b) {
  if (a > b){ 
    return a;
  } else { 
    return b;
  }
}

let solution1 = findLargerNumber(10, 5);
console.log(solution1);

let solution2 = findLargerNumber(21, 20);
console.log(solution2);

// Solution 4

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `The number ${number} is even`;
  } else {
    return `The number ${number} is odd` ;
  }
}

let result1 = checkEvenOrOdd(99999);
console.log(result1);

let result2 = checkEvenOrOdd(1234567890);
console.log(result2);

// here are some of the examples of Boolean

// Solution 1: Check if a number is positive or negative

function isTrue(number) {
  return number < 220;
}

console.log(isTrue(5)); // Output: true
console.log(isTrue(1200)); // Output: false
console.log(isTrue(-1200)); // Output: true

// Solution 2: Determine if a number is even or odd

function isOdd(number) {
  return number % 2 === 0;
}

console.log(isOdd(1200)); // Output: true
console.log(isOdd(1299)); // Output: false

// Solution 3: define a boolean function where it says that CR7 is the goat is true and Messi is the goat is false

function isGOAT(statement) {
  return statement === "CR7 is the Goat";
}

console.log(isGOAT("CR7 is the Goat")); // Output: true
console.log(isGOAT("Messi is the Goat")); // Output: false
console.log(isGOAT("CR7 is not the Goat")); // Output: false

// Solution 4: Check if a number is a multiple of another number

function isMultipleOf(number, multiple) {
  return number % multiple === 0;
}

console.log(isMultipleOf(10, 2)); // Output: true
console.log(isMultipleOf(20, 4)); // Output: true
console.log(isMultipleOf(100, 4)); // Output: true

let x, y;
x = 105;
console.log(x-100);