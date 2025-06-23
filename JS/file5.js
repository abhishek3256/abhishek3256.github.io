function greet(name) {
    console.log( `Hello, ${name}!`);
}
greet("Alice"); 
(function add(x, y) {
    console.log( x + y);
})(5, 10);

//Hosing example
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted!";
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization


Sub(5,2);
function Sub(a, b) {
    console.log(`Subtraction of ${a} and ${b} is: ${a - b}`);
}

// hoisting in array
var arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
// hoisting in object
var obj = { name: "John", age: 30 };
console.log(obj.name); // John
console.log(obj.age); // 30
console.log(e|2);
// bitwise OR operator, compares each bit of two numbers
console.log(e^2);
// bitwise XOR operator, compares each bit of two numbers
console.log(~e);
// bitwise NOT operator, inverts the bits of a number
console.log(e|2);
// bitwise OR operator, compares each bit of two numbers
console.log(e^2);
// bitwise XOR operator, compares each bit of two numbers