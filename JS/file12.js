//scope

let a=10;
if(10>5)
{
    let a=20;
}
console.log(a); // Output: 20

// In this code, the variable 'a' is declared with 'let' inside the if block.
// This means that the 'a' inside the if block is a different variable from the '   
// one outside the block. The outer 'a' remains unchanged, so the output is 20.
// If we had used 'var' instead of 'let', the output would have been
// 10, because 'var' is function-scoped and the inner 'a' would have been hoisted
// to the top of the function or global scope, effectively shadowing the outer 'a'.
