import express from 'express'
const app=express();
app.listen(8080,()=>{
    console.log("Server started");
});
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });
// app.get("/products",(req,res)=>{
//     // res.send("Product List");
//     res.status(201).json({
//         "id":1,"name":"Product 1","Price":"350"
//     });
// });
// app.get("/ab*cd",(req,res)=>{
//     res.send("Hello ji");
// })

// app.get("/name",(req,res)=>{
//     res.send("Good Morning");
// });


// app.get("/name/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+" "+req.params.age);
// });
// app.get("/",(req,res)=>{
// res.send(req.headers.authorization)

// });
app.get("/",(req,res)=>{
res.send(req.query.name+" "+req.query.age);

});
app.post("/",(req,res)=>{
    res.send("Post Request");
});
app.delete("/",(req,res)=>{
    res.send("Delete Request");
});
app.patch("/",(req,res)=>{
    res.send("Patch Request");
})