db.employees.aggregate([

    {$project:{_id:0,name:1,salary:1,Grade:{
        $cond:
        {if:{$gt:{"salary":"2000"}},then:"Grade A",else:"Grade B"},
        
    }}}
])
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grade: {
        $cond: {
          if: { $gt: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B"
        }
      }
    }
  }
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        slary:1,
        department:1,
    }}
])


db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      department: 1,
      salary:1,
      newSalary: {
        $cond: {
          if: { $eq: ["$department", "IT"] },
          then: 2000,
          else: 1000
        }
      }
    }
  }
])

db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            department:1,
            Sal:{
                $convert:{input:"$strsalary" ,to:"int"}
            }
        }
    },
    {
        $group:{
            _id:"$department",total:{$sum:"$sal"}
        }
    },
]);

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"$strSalary",to:"int"}}
    }},
    {$group:{_id:"$department",total:{$sum:"$Sal"}}},
    {
        $out:"depWiseSalary"
    }
]);


db.createView("depWiseView","employees",[
    {$project:{
        _id:0,
        name:1,
        salary:1,
        department:1,
        
    }}
])