db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:1}
]);
db.employees.aggregate([
    {$group:{
        _id:"$department",
        total:{$sum:"$salary"}
    }

    },
]);
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total: { $sum: "$salary" }
    }
  },
  {
    $unionWith: {
      coll: "employees",
      pipeline: [
        {
          $group: {
            _id: "All Departments",
            total: { $sum: "$salary" }
          }
        }
      ]
    }
  }
]);
db.employees.aggregate([
    {$project:{empName:"$name"}},
]);
db.employees.aggregate([
    {
        $project:{
            _id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}
        }
    },
]);




//write a query to display name email and slary dor all the it employes
db.employees.aggregate([
   {$match:{department:"IT"}},
   {$project:{_id:0,name:1,salary:1}},

]);
db.employees.aggregate([
   {$project:{_id:0,name:1,salary:1,bonus:{$add:["$salary",500]}}},

]);
db.employees.aggregate([
   {$project:{_id:0,name:1,salary:1,bonus:{$add:["$salary",500]}}},

]);
db.employees.aggregate([
  {
    $match: {
      salary: { $gt: 3000 }
    }
  },
  {
    $project: {
      _id:0,  
      name: 1,
      salary: 1,
      CTC: "$salary"
    }
  }
]);

db.students.insertOne(
    {name:"Alice Johnson","age":23,"courses":["Math","Physics"],"enrolled":true}
);
db.students.insertMany([
    {name:"Tom",age:22},
    {name:"Sara",age:24},
    {name:"Mike",age:21}
]);
db.students.updateOne({}, {$set:{courses:["chemistry"]}},

{name:"Sara"},{$set:{courses:["Physics","Math"]}},
{name:"Alice Johnson"},{$set:{age:24}},

);

db.students.updateOne(
  {},
  { $set: { courses: ["chemistry"] } }
);

db.students.updateOne(
  { name: "Sara" },
  { $set: { courses: ["Physics", "Math"] } }
);

db.students.updateOne(
  { name: "Alice Johnson" },
  { $set: { age: 24 } }
);

db.students.aggregate([
  {
    $group: {
      _id:0,
      averageAge: { $avg: "$age" }
    }
  }
]);