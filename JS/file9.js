// const points=[2,5,3,2,1,8];
// // points.forEach((value,index,arr)=>{
// //       console.log(`Index: ${index}, Value: ${value}`);

// // });
// const newarr=points.map((value,index)=>{
//     console.log(`Index: ${index}, Value: ${value}`);
//     return value * 2;
// });
// console.log(newarr); // [4, 10, 6, 4, 2, 16]
// // points.filter((value,index)=>{
// //     return value > 2;
// // }).forEach((value,index)=>{
// //     console.log(`Filtered Index: ${index}, Value: ${value}`);
// // });
// // // Output: Filtered Index: 0, Value: 5
// // //         Filtered Index: 1, Value: 3
// // //         Filtered Index: 2, Value: 8
// // points.reduce((accumulator, currentValue) => {
// //     return accumulator + currentValue;
// // }, 0)
// // // Output: 21 (sum of all elements in the array)

// const newArr=points.filter((value)=>value>2).map((value)=>value-2);
// console.log(newArr); // [5, 3, 8]


// const points=[2,5,3,2,1,8];
// const newArr=points.find((value)=>value===2);
// console.log(newArr); 


// const points=[2,5,3,2,1,8];
// const newArr=points.reduce((sum,value)=>{ return value+sum},2);
// console.log(newArr);

const points = [2, 5, 3, 2, 1, 8];
const newArr=points.map((value)=>value>2);
console.log(newArr); // [5, 5, 5, 5, 5, 5]