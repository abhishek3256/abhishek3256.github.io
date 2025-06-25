//mongosh in command prompt
// show dbs
//use lpua
//db.users.insertOne({.....})
//db.users.find()
//db.users.findOne()
//db.users.drop()
db.users.insertOne({name:"Abhishek",age:25,college:"LPU",what:"Learning"});
db.users.insertOne({name:"John",age:21,college:"LPU",what:"Not Learning"});
db.users.insertMany([{name:"Virat",age:35},{name:"rohit",age:36},{name:"JP DUmminy",age:56}]);