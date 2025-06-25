db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})
db.employees.find();
db.employees.insertMany([{
    name:"Mike Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date:Date()
},
{
    name:"Cathy G",
    email:"cathy@gmail.com",
    department:"CSE",
    salary:5896,
    location:["AZ","OH"],
    date:Date()
}


]);
lpua> db.employees.find().skip(2);   //>=0
lpua> db.employees.find().limit(1); // negative will work
lpua> db.employees.find().limit(4).skip(2);
lpua> db.employees.find().limit(4).skip(2).limit(1).skip(1);
lpua> db.employees.find().sort({name:-1}); //ascending
lpua> db.employees.find().sort({name:1}); //deceneding
lpua> db.employees.find().sort({name:-1}).limit(1);
MinKey < Null < Numbers < Strings < Objects < Arrays < BinData < ObjectId < Boolean < Date < Timestamp < Regex < MaxKey