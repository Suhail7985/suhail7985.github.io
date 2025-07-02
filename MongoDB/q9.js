db.employees.find({name:{$regex:"a"}})      //$regex use for searching an element 


db.employees.find({name:{$regex:"cathy"}})


db.employees.find({name:{$regex:"cathy",$options:"i"}})  //$option: "i" use for case insensitive search(means ignore casesesitive)


db.employees.find({name:{$regex:"^c",$options:"i"}})   //^c all the namess begin with c will dispplay

db.employees.find({name:{$regex:"y$",$options:"i"}})  //y$ all the names end with y will display

