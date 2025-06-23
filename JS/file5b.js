// Arrow funtions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = (x) => x * x;
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};
// Using arrow functions
console.log(`Sum: ${add(5, 10)}`); // Sum: 15
console.log(`Product: ${multiply(5, 10)}`); // Product:
console.log(`Square: ${square(5)}`); // Square: 25
greetUser("Alice"); // Hello, Alice!
// Using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(`Doubled numbers: ${doubled}`); // Doubled numbers:
// Doubled numbers: 2,4,6,8,10
const filtered = numbers.filter(num => num > 2);
console.log(`Filtered numbers: ${filtered}`); // Filtered numbers: 3,4,5
// Filtered numbers: 3,4,5
// Using arrow functions with reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sum}`); // Sum of numbers: 15
// Sum of numbers: 15
// Using arrow functions with forEach
numbers.forEach(num => console.log(`Number: ${num}`));
// Number: 1
// Number: 2

// Number: 3
// Number: 4
// Number: 5
// Using arrow functions with find
const found = numbers.find(num => num > 3);
console.log(`First number greater than 3: ${found}`); // First number greater than 3: 4
// First number greater than 3: 4
// Using arrow functions with some
const hasEven = numbers.some(num => num % 2 === 0);
console.log(`Array has even number: ${hasEven}`); // Array has even number: true
// Array has even number: true
// Using arrow functions with every
const allGreaterThanZero = numbers.every(num => num > 0);
console.log(`All numbers greater than zero: ${allGreaterThanZero}`); // All numbers greater than zero: true
// All numbers greater than zero: true
// Using arrow functions with sort
const sorted = numbers.sort((a, b) => a - b);
console.log(`Sorted numbers: ${sorted}`); // Sorted numbers: 1,2,3,4,5
// Sorted numbers: 1,2,3,4,5
// Using arrow functions with flatMap
const nestedArray = [[1, 2], [3, 4], [5]];
const flatMapped = nestedArray.flatMap(arr => arr.map(num => num * 2));
console.log(`Flat mapped numbers: ${flatMapped}`); // Flat mapped numbers: 2,4,6,8,10
// Flat mapped numbers: 2,4,6,8,10
// Using arrow functions with reduceRight
const reversedSum = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(`Sum of numbers (reversed): ${reversedSum}`); // Sum of numbers (reversed): 15
// Sum of numbers (reversed): 15
