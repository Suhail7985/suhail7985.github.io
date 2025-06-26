db.users.find({},{_id:0,name:1,age:1})
db.employees.find().skip(1)
db.employees.find().limit(1)
db.employees.find().skip(1).limit(1)
db.employees.find({department:"IT"},{_id:0,name:1,salary:1})
db.employees.find(
    {department:{$eq:"IT"}},   //eq=equal to
    {_id:0,name:1,salary:1})

db.employees.find(
    {department:{$nq:"IT"}})   //ne=not equal

db.employees.find(
    {salary:{$gt:3000}},   //gt= greater then
    {_id:0,name:1,salary:1})


db.employees.find(
    {salary:{$gte:3000}},      //gte=greater then aur equal to
    {_id:0,name:1,salary:1})

db.employees.find(
    {salary:{$lt:3000}},   //less than 
    {_id:0,name:1,salary:1})


db.employees.find(
    {salary:{$lte:3000}},   //less than equal to
    {_id:0,name:1,salary:1})


db.employees.find(
    {salary:{$lte:3000},department:"IT"},  
    {_id:0,name:1,salary:1})
    

db.employees.find(
    {$or:[{salary:{$lte:3000},department:"IT"}]},  
    {_id:0,name:1,salary:1,department:1})


db.employees.find(
    {$and:[{salary:{$lte:3000},department:"IT"}]},  
    {_id:0,name:1,salary:1,department:1})


db.employees.find(
    {$or:[{},{}]}
)


db.employees.find(
    {$and:[{},{}]}
)