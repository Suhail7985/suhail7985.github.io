db.employees.find({salary:{$gt:3000}},{name:1}.limit(2).skip(1))

db.employees.find({salary:{$gt:3000},department:"IT"},{name:1}.limit(1))

db.employees.aggregate(
    {$match:{salary:{$gt:3000}}},
    {$project:{name:1,salary:1,location:1}},
    {$sort:{name:1}},
    {$limit:1}
)

db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}
)


db.employees.aggregate(
    {$project:{name:1,salary:1,location:1,points:1}}
)


db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}},
    { $unwind:"$location"},        //unwind= split array into separate documents //displays locaiton in seperate array
])



db.employees.aggregate([
    {$project:{_id:0,EmpName:"$name"}},
])


db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}}},
])


db.employees.aggregate([
    {$project:{name:0}},
])

db.employees.aggregate([
    {$group:{_id:"$department",total:{$sum:"$salary"}}},
])  // group by department and sum salary




db.orders.insertMany([
  { empID: ObjectId("685a8b0ce232d62d10fa4215"), orderValue: 5000 },
  { empID: ObjectId("685bb9ed92e272068dfa4214"), orderValue: 5000 },
  { empID: ObjectId("685bb9ed92e272068dfa4215"), orderValue: 5000 },
  { empID: ObjectId("685bca2692e272068dfa4219"), orderValue: 5000 },
  { empID: ObjectId("685bca2692e272068dfa421a"), orderValue: 5000 }
]);



//lookup = joins two collections

db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {
        $lookup:                                        
        {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders"
        },
    },
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.orderValue":1}}
    

])




db.empCountry.insertMany([
  { empID: ObjectId("685a8b0ce232d62d10fa4215"), country: "United States"},
  { empID: ObjectId("685bb9ed92e272068dfa4214"), country: "Canada"},
  { empID: ObjectId("685bb9ed92e272068dfa4215"), country: "United Kingdom"},
  { empID: ObjectId("685bca2692e272068dfa4219"), country: "India"},
  { empID: ObjectId("685bca2692e272068dfa421a"), country: "Germany"}
]);



db.employees.aggregate([
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empID",
            as: "empCountry"
        },
    },
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders"
        }      
    },
        {$unwind:"$empCountry"},
        {$unwind:"$orders"},
    {$project:{name:1,"empCountry.country":1,"orders.orderValue":1}}
])


