let a=10;
let b=12;
if(a>b) console.log("a is greater than b");
else if(a<b) console.log("b is greater than a");
else console.log("a is equal to b");
let c;
if(c) console.log("Good Morning");
else console.log("Good Night");
let x=5;
let y=2;
x>y ? console.log("x is greater than y") : console.log("y is greater than x");
let num=10;
switch(num) {
    case 1:
        console.log("Number is 1");
        break;
    case 2:
        console.log("Number is 2");
        break;
    case 10:
        console.log("Number is 10");
        break;
    default:
        console.log("Number is not 1, 2, or 10");
}
let i=0;
while(i<5) {
    console.log("i is: " + i);
    i++;
}
let j=0;
do {
    console.log("j is: " + j);
    j++;
} while(j<5);
console.log("Using for loop:");
for(let k=0; k<5; k++) {
    console.log("k is: " + k);
}
let arr=[1,2,3,4,5];
for(let l=0; l<arr.length; l++) {
    console.log("Element at index " + l + " is: " + arr[l]);
}
let obj={name:"John", age:30, city:"New York"};
for(let key in obj) {
    console.log(key + ": " + obj[key]);
}
console.log("Using forEach:");
arr.forEach(function(value, index) {
    console.log("Element at index " + index + " is: " + value);
});
console.log("Using for...of:");
for(let value of arr) {
    console.log("Value: " + value);
}
console.log("Using for...in:");
for(let index in arr) {
    console.log("Element at index " + index + " is: " + arr[index]);
}
console.log("Using map:");
let doubledArr = arr.map(function(value) {
    return value * 2;
});
console.log("Doubled array: " + doubledArr);
console.log("Using filter:");
let filteredArr = arr.filter(function(value) {
    return value > 2;
});
console.log("Filtered array (values > 2): " + filteredArr);
console.log("Using reduce:");
let sum = arr.reduce(function(accumulator, value) {
    return accumulator + value;
}, 0);
console.log("Sum of array elements: " + sum);
console.log("Using find:");
let foundValue = arr.find(function(value) {
    return value > 3;
});
console.log("First value greater than 3: " + foundValue);
console.log("Using findIndex:");
let foundIndex = arr.findIndex(function(value) {
    return value > 3;
});
console.log("Index of first value greater than 3: " + foundIndex);
console.log("Using some:");
let hasValueGreaterThan3 = arr.some(function(value) {
    return value > 3;
});
console.log("Array has value greater than 3: " + hasValueGreaterThan3);
console.log("Using every:");
let allValuesGreaterThan0 = arr.every(function(value) {
    return value > 0;
});
console.log("All values are greater than 0: " + allValuesGreaterThan0);
console.log("Using includes:");

let includesValue3 = arr.includes(3);
console.log("Array includes value 3: " + includesValue3);
console.log("Using indexOf:");
let indexOfValue3 = arr.indexOf(3);
console.log("Index of value 3: " + indexOfValue3);
console.log("Using lastIndexOf:");
let lastIndexOfValue3 = arr.lastIndexOf(3);