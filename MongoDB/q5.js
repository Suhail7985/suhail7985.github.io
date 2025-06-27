//updated document from collection
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}})     //set salary to 30000 

db.employees.updateMany(
    {},
    {$set:{points:1}}) 


db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}})   //increment

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}})


db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name:"krish",department:"HR",salary:"2700"}},
    {upsert:true})              //insert if not exist


db.employees.deleteOne({email:"krish@gmail.com"})
db.employees.deleteMany({departme})


//-1 for decending order
//1 for accecnding orrder

db.employees.find().sort({salary: -1 }).limit(1);



db.employees.find({},{_id:0,Empname:"$name"}); //this is to show name as Empname in the output but it is not changing in database


db.employees.updateMany(
    {},
    {$rename:{points:"score"}})


db.employees.updateMany(
    {},
    {$unset:{points:""}})
 

db.employees.updateMany(
    {},
    {$push:{points:5}})   //for arrays (push the value in the form of array)
 

db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}})    //$pull is a modifier operator that removes items from an array when they match a condition.


db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}})  //add one time in array if not exist 


    db.employees.updateMany(
        {},
        {$pop:{location:-1}})     //1 means last item will remove adn -1 for first item

