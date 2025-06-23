//spread operator

let marks={
    English: 90,
    Math: 95,
};
marks={...marks, Science: 85}; // This will throw an error because 'marks' is a constant object
console.log(marks); // Output: { English: 90, Math: 95, Science: 85 }


let students=['Aryan' ,'Rohan', 'Sohan'];
students=[...students, 'Mohit']; // This will throw an error because 'students' is a constant array
console.log(students); // Output: ['Aryan', 'Rohan', 'Sohan', 'Mohit']


