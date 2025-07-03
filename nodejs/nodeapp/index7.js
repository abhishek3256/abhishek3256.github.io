// import express from "express"
// const app = express();
// app.listen(8080, () => {
//   console.log("Server started");
// });

// app.use(express.json());
// let products = [];

// app.post("/", (req, res) => {
//   try{  
//   const { id, name, age } = req.body;

//   const exists = products.find((item) => item.id === id);
//   if (exists) {
//     return res.send("Item is already added");
//   }

//   products.push({ id, name, age });
//   res.status(201).json({message:"Item added successfully"});
// }
// catch(err){
//     res.status(400).json({message:"Something wnet wrong"});
// }
// });

// app.get("/", (req, res) => {
//   res.json(products);
// });



// app.delete("/",(req,res)=>{
//   const id=req.params.id;
//   const exists = products.filter((value)=>value.id!=id);

//   res.json("Product deleted");
// });
// app.patch("/",(req,res)=>{
//     res.json("Item modified Successfully");

// })
// import express from "express";
// const app = express();
// app.listen(8080, () => {
//   console.log("server started");
// });
// app.use(express.json());
// // app.post("/",(req,res) =>{
// //     res.send(req.body)
// // })

// let products = [];
// // app.post("/",(req,res)=>{
// //     products.push(req.body);
// //     res.send("product created");
// // })

// app.post("/", (req, res) => {
//     try{
//   const { name, price } = req.body;
//   const found = products.find((product) => product.name === name);
//   if (found) res.send("product already exsits");
//   else {
//     products.push(req.body);

//     res.status(201).json({ message: "products created" });
//   }}
//   catch(err){
//     res.status(400).json({ message: "something went wrong" });
//   }
  
// });
// app.get("/", (req, res) => {
//   res.json(products);
// });

// app.delete("/:name",(req,res)=>{
//     try{
//     const name = req.params.name;
//     products = products.filter(val => val.name !== name)
//     res.json({ message: "Product deleted" });
//     }
//     catch(err){
//         res.json({ message: "something went wrong" });
//     }
   
// })

// app.patch("/",(req,res)=>{
//     res.send(req.body);
// })

import express from "express";
const app = express();

app.use(express.json());
let products = [];

app.listen(8080, () => {
  console.log("Server started");
});

// 🟢 POST - Add a new product
app.post("/", (req, res) => {
  try {
    const { id, name, age } = req.body;

    const exists = products.find((item) => item.id === id);
    if (exists) {
      return res.status(400).send("Item is already added");
    }

    products.push({ id, name, age });
    res.status(201).json({ message: "Item added successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// 🔵 GET - View all products
app.get("/", (req, res) => {
  res.json(products);
});

// 🔴 DELETE - Remove product by ID
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const exists = products.find((item) => item.id === id);

  if (!exists) {
    return res.status(404).send("Item not found");
  }

  products = products.filter((item) => item.id !== id);
  res.json({ message: "Product deleted successfully" });
});

// 🟣 PATCH - Update product name or age by ID
app.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  let product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).send("Item not found");
  }

  if (name) product.name = name;
  if (age) product.age = age;

  res.json({ message: "Item modified successfully", product });
});