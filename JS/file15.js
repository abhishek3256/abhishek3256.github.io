const students={
    name:"Aryan",
    age: 20,
};
console.log(JSON.stringify(students)); // Output: { name: 'Aryan', age: 20 }

const students2='{"name":"Aryan","age":20}';
const newstudents2=JSON.parse(students2);
console.log(newstudents2); // Output: { name: 'Aryan', age:
console.log(newstudents2.name); // Output: { name: 'Aryan', age
// 20 }

