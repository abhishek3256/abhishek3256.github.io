//arrays
const array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]
array.pop();
console.log(array); // [1, 2, 3]    
array.unshift(0);
console.log(array); // [0, 1, 2, 3]
array.shift();
console.log(array); // [1, 2, 3]
const slicedArray = array.slice(1, 3);
console.log(slicedArray); // [2, 3]
const splicedArray = array.splice(1, 1);    
console.log(splicedArray); // [2]
console.log(array); // [1, 3]
// Using forEach to iterate over an array
array.forEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});

//array methods/
// Using map to create a new array with modified values//
const doubledArray = array.map(item => item * 2);
console.log(doubledArray); // [2, 6]
// Using filter to create a new array with filtered values
const filteredArray = array.filter(item => item > 1);
console.log(filteredArray); // [3]
// Using reduce to accumulate values in an array
const sum = array.reduce((acc, item) => acc + item, 0);
console.log(sum); // 4
// Using find to get the first element that matches a condition
const foundItem = array.find(item => item > 1);
console.log(foundItem); // 2
// Using some to check if any element matches a condition
const hasEven = array.some(item => item % 2 === 0);
console.log(hasEven); // true
// Using every to check if all elements match a condition
const allGreaterThanZero = array.every(item => item > 0);
