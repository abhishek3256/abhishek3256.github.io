//objects
const person = {
  name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person); // { name: 'John', age: 30, greet: [Function: greet] }
console.log(person.name); // John
console.log(person.age); // 30
person.greet(); // Hello, my name is John and I am 30 years old.
// Adding a new property
person.city = "New York";
console.log(person.city); // New York
// Modifying an existing property
person.age = 31;
console.log(person.age); // 31
// Deleting a property
delete person.city;
console.log(person.city); // undefined
// Iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: John
// age: 31
// greet: function() { ... }
// Using Object.keys() to get an array of property names
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'greet']  
// Using Object.values() to get an array of property values
const values = Object.values(person);
console.log(values); // ['John', 31, [Function: greet]]
// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 31], ['greet', [Function: greet]]]
// Using Object.assign() to copy properties from one object to another
const anotherPerson = {};
Object.assign(anotherPerson, person);
console.log(anotherPerson); // { name: 'John', age: 31, greet: [Function: greet] }
// Using Object.freeze() to make an object immutable
const frozenPerson = Object.freeze({ name: "Alice", age: 25 });
// frozenPerson.age = 26; // This will not change the age property
// console.log(frozenPerson.age); // 25
// Using Object.seal() to prevent adding new properties but allow modification of existing ones 
const sealedPerson = Object.seal({ name: "Bob", age: 28 });
sealedPerson.age = 29; // This will work
console.log(sealedPerson.age); // 29
// sealedPerson.city = "Los Angeles"; // This will not work
// console.log(sealedPerson.city); // undefined
// Using Object.getOwnPropertyDescriptor() to get property descriptors
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor); // { value: 'John', writable: true, enumerable: true, configurable: true }
// Using Object.defineProperty() to define a new property with specific attributes
Object.defineProperty(person, 'country', {
    value: 'USA',
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(person.country); // USA
// person.country = 'Canada'; // This will not change the country property
// console.log(person.country); // USA
// Using Object.getOwnPropertyNames() to get all property names, including non-enumerable
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // ['name', 'age', 'greet', 'country']
// Using Object.is() to compare two values for equality
const value1 = { a: 1 };
const value2 = { a: 1 };
console.log(Object.is(value1, value2)); // false (different objects)
// Using Object.is() to compare two identical values
const value3 = value1;
console.log(Object.is(value1, value3)); // true (same object)
// Using Object.prototype.hasOwnProperty() to check if an object has a specific property
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('city')); // false (city was deleted)
// Using Object.prototype.toString() to get the string representation of an object
console.log(Object.prototype.toString.call(person)); // [object Object] 
// Using Object.prototype.toString() with other data types
console.log(Object.prototype.toString.call(123)); // [object Number]    
console.log(Object.prototype.toString.call("Hello")); // [object String]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
// Using Object.prototype.toString() with arrays
console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]
console.log(Object.prototype.toString.call({ a: 1 })); // [object Object]
// Using Object.prototype.toString() with functions
console.log(Object.prototype.toString.call(function() {})); // [object Function]


