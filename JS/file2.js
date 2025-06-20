// let a=54;
// let b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); // modulus operator
// console.log(a**b); // exponentiation operator (ES2016)
// console.log(a++); // post-increment
// console.log(a); // a is now 55
// console.log(++a); // pre-increment, a is now 56
// console.log(a--); // post-decrement, a is now 55 again
// console.log(--a); // pre-decrement, a is now 54 again
let a=10;
let b=20;
let c=30;
let d=40;
console.log(a==b); // false, value comparison
console.log(a===b); // false, value and type comparison     
console.log(a!=b); // true, value comparison
console.log(a!==b); // true, value and type comparison
console.log(a<b); // true, less than
console.log(a<=b); // true, less than or equal to
console.log(a>b); // false, greater than
console.log(a>=b); // false, greater than or equal to
console.log(a<b&&b<c); // true, logical AND
console.log(a<b||b<c); // true, logical OR
console.log(!(a<b)); // false, logical NOT
console.log(a<b&&b<c&&c<d); // true, all conditions must be true
console.log(a<b||b<c||c>d); // true, at least one condition must be true
console.log(a<b&&b<c||c<d); // true, mixed logical operators
console.log(a<b||b<c&&c<d); // true, operator precedence matters
console.log(a<b||b<c||c>d&&d>a); // true, mixed logical operators with precedence
console.log(a<b||b<c&&c<d||d>a); // true, mixed logical operators with precedence
console.log(a<b||b<c&&c<d||d<a); // false, mixed logical operators with precedence
console.log(a<b||b<c&&c<d||d==a); // true, mixed logical operators with precedence
console.log(a<b||b<c&&c<d||d!=a); // true, mixed logical operators with precedence

