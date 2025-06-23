// //callback function
// function callbackFunction() {
//     console.log("Callback function executed");
// }
// // Using a callback function
// function executeCallback(callback) {
//     console.log("Executing callback...");
//     callback();
// }
// executeCallback(callbackFunction); // Executing callback... Callback function executed
// // Using a callback function with array methods
// const numbersArray = [1, 2, 3, 4, 5];
// numbersArray.forEach(num => {
//     console.log(`Processing number: ${num}`);
//     executeCallback(() => console.log(`Callback for number: ${num}`));
// });
// // Processing number: 1
// // Executing callback... Callback for number: 1
// // Processing number: 2
// // Executing callback... Callback for number: 2     
// // Processing number: 3
// // Executing callback... Callback for number: 3
// // Processing number: 4
// // Executing callback... Callback for number: 4
// // Processing number: 5
// // Executing callback... Callback for number: 5
// // Using a callback function with filter
// const filteredNumbers = numbersArray.filter(num => {
//     console.log(`Filtering number: ${num}`);
//     return num > 2;
// });







let main=(x)=>{
    x();
}
main(()=>{
    console.log("Hello from main function");
});
const add=(...args)=>{
    console.log("Adding numbers:", args);
    return args.reduce((acc, num) => acc + num, 0);
}
let result =add(4,5,6,7,8,9,10);
console.log(result);
