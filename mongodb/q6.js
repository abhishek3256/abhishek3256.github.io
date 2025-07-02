// db.employees.aggregate([
//     {$match:{department:"IT"}},
//     {$project:{name:1,salary:1}},
//     {$sort:{salary:1}},
//     {$limit:1}
// ]);
// db.employees.aggregate([
//     {$group:{
//         _id:"$department",
//         total:{$sum:"$salary"}
//     }

//     },
// ]);
// db.employees.aggregate([
//   {
//     $group: {
//       _id: "$department",
//       total: { $sum: "$salary" }
//     }
//   },
//   {
//     $unionWith: {
//       coll: "employees",
//       pipeline: [
//         {
//           $group: {
//             _id: "All Departments",
//             total: { $sum: "$salary" }
//           }
//         }
//       ]
//     }
//   }
// ]);
// db.employees.aggregate([
//     {$project:{empName:"$name"}},
// ]);
// db.employees.aggregate([
//     {
//         $project:{
//             _id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}
//         }
//     },
// ]);




// //write a query to display name email and slary dor all the it employes
// db.employees.aggregate([
//    {$match:{department:"IT"}},
//    {$project:{_id:0,name:1,salary:1}},

// ]);
// db.employees.aggregate([
//    {$project:{_id:0,name:1,salary:1,bonus:{$add:["$salary",500]}}},

// ]);
// db.employees.aggregate([
//    {$project:{_id:0,name:1,salary:1,bonus:{$add:["$salary",500]}}},

// ]);
// db.employees.aggregate([
//   {
//     $match: {
//       salary: { $gt: 3000 }
//     }
//   },
//   {
//     $project: {
//       _id:0,  
//       name: 1,
//       salary: 1,
//       CTC: "$salary"
//     }
//   }
// ]);

// db.students.insertOne(
//     {name:"Alice Johnson","age":23,"courses":["Math","Physics"],"enrolled":true}
// );
// db.students.insertMany([
//     {name:"Tom",age:22},
//     {name:"Sara",age:24},
//     {name:"Mike",age:21}
// ]);
// db.students.updateOne({}, {$set:{courses:["chemistry"]}},

// {name:"Sara"},{$set:{courses:["Physics","Math"]}},
// {name:"Alice Johnson"},{$set:{age:24}},

// );

// db.students.updateOne(
//   {},
//   { $set: { courses: ["chemistry"] } }
// );

// db.students.updateOne(
//   { name: "Sara" },
//   { $set: { courses: ["Physics", "Math"] } }
// );

// db.students.updateOne(
//   { name: "Alice Johnson" },
//   { $set: { age: 24 } }
// );

// db.students.aggregate([
//   {
//     $group: {
//       _id:0,
//       averageAge: { $avg: "$age" }
//     }
//   }
// ]);
// db.address.insertMany([
//     {
//      studentID:ObjectId('685cdca25aac9fa3f6b71238'),
//      city:"Arizona",
//      Country:"USA"          
//     },
//     {
//         studentID:ObjectId('685cdd545aac9fa3f6b71239'),
//         city:"Pompei",
//         country:"Roman Empire"

//     }
//     ,
//     {
//         studentID:ObjectId('685cdd545aac9fa3f6b7123a'),
//         city:"Delhi",
//         country:"India"
//     },
//     {
//         studentID: ObjectId('685cdd545aac9fa3f6b7123b'),
//         city:"London",
//         country:"Britain"
//     }


// ]);
// db.students.aggregate([
//     {$lookup:{
//         from:"address",
//         localField:"_id",
//         foreignField:"studentId",
//         as:"address"
//     },},
//     {$unwind:"$address"},
//     {$project:{name:1,"address.city":1,"address.country":1}},
// ]);
// db.address.insertOne({
   
//          studentID:ObjectId('685cdd545aac9fa3f6b71239'),
//         city:"Pompei",
//         country:"Roman Empire"
// })


//use lpua

db.posts.insertOne({ _id: "p1", post: "Post 1" });
db.posts.insertOne({ _id: "p2", post: "Post 2" });

db.comments.insertOne({
  _id: "c1",
  pid: "p1",
  comment: "This is comment 1 of post 1",
});

db.comments.insertOne({
  _id: "c2",
  pid: "p1",
  comment: "This is comment 2 of post 1",
});

db.comments.insertOne({
  _id: "c3",
  pid: "p2",
  comment: "This is comment 1 of post 2",
});

db.comments.insertOne({
  _id: "c4",
  pid: "p2",
  comment: "This is comment 2 of post 2",
});

db.comments.insertOne({
  _id: "c5",
  pid: "p2",
  comment: "This is comment 3 of post 2",
});

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
]);

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
]);

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
  { $project: { _id: 0, post: 1, "comments.comment": 1 } },
]);

db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 });

db.marks
  .find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 })
  .sort({ name: 1 });

db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 }).sort({ name: 1, term: 1 });

db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 }).sort({ term: 1 });

db.marks.aggregate([
    {$group:{_id:"$name",total:{$sum:"$score"}}}
])


db.marks.aggregate([
    {$group:{_id:"$subject",total:{$sum:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:"$term",total:{$sum:"$score"}}}
])


db.marks.aggregate([
    {$group:{
        _id:{name:"$name",subject:"$subject"},
        total:{$sum:"$score"}
    }}
]).sort({_id:1})

db.marks.aggregate([
    {$group:{
        _id:{term:"$term",name:"$name"},
        Avg:{$avg:"$score"}
    }}
]).sort({_id:1})