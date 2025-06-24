// const f1=(a)=>{
//     return new Promise ((resolve , reject)=>{
//         if(a<0) reject ("invalid input");
//         else    resolve(5);
        

//         reject("Something went wrong");
//     });
// }
// const f2=(x)=>{
//     console.log(x+6)
// };
// const n=f1();
// f1(-3).then((n)=>f2(n))
//     .catch((err)=>console.log(err)); 


// fetch("https://jsonplaceholder.typicode.com/users")
//    .then((res)=>res.json())
//    .then((data)=>{
//     data.forEach(element => {
//         console.log(element.name,element.email);

        
//     });


//    })
//    .catch((err)=>console.log(err));



const fetchData=async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    data.forEach(element => {
        console.log(element.name , element.email);
        
    });
};
fetchData();