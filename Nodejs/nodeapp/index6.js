//users[]
//{name,email,pass}
//get > localhost:8080/ >display all usrs
//post >localhost:8080/register > register user
//post > localhost:8080/  > login user

import express from 'express';
const app = express ()
app.listen(8080,()=> {
    console.log('server is running on port 8080')
});
app.use(express.json());
let users = []; 
const auth=( req,res,next) =>{
    if(req.headers.authorization)
    {
        next();
    }
    else{
        res.json({message: "Invalid Token"});
    }
};


app.get('/',auth,(req,res)=>
    {
        res.json(users)
    });
app.post('/register',(req,res)=>
    {
        const {name,email,pass} = req.body
            users.push({name,email,pass})
            res.json("register successfully")
     });
app.post('/login',(req,res)=>
    {
        const {email,pass} = req.body
        const user = users.find(user =>
        user.email === email && user.pass === pass
        )
        if(user)
        {
         res.json("welcome")
        }
        else
        {
        res.json("invalid email or password")
        }
        });
                                        
