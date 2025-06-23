try{
    console.log(a);
}
catch(e){
    console.log("Error: " + e.message); // Output: Error: a is not defined
}
// In this code, we are trying to access the variable 'a' which is not defined.
// This will throw a ReferenceError because 'a' is not declared in the current scope.   
// The error message will be "a is not defined".
// If we had declared 'a' with 'var' or 'let' before this line, it would not throw an error.
// However, since 'a' is not declared, we catch the error and log a custom message.
// This demonstrates the concept of scope in JavaScript, where variables declared
// with 'let' or 'const' are block-scoped and not accessible outside their block
// or function.
