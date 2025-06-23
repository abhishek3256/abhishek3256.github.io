function greet (student) {
    console.log(`Hello, ${student}!`);
}
greet("Abhishek")
function add(x, y) {
    return x + y;
}
let result=add(5, 10);
console.log(`The sum is: ${result}`);

//array
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
numbers.push(6); // Add an element to the end
console.log("After push:", numbers);
numbers.pop(); // Remove the last element
console.log("After pop:", numbers);
numbers.unshift(0); // Add an element to the beginning
console.log("After unshift:", numbers);
numbers.shift(); // Remove the first element
console.log("After shift:", numbers);
console.log("Array length:", numbers.length);
// Accessing elements
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);
// Iterating through the array
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element at index ${i}:`, numbers[i]);
}
// arguments object
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
let totalSum = sum(1, 2, 3, 4, 5);
console.log("Total sum using arguments:", totalSum);