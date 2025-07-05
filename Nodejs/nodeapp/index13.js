import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
const app = express();
app.use(express.json());
//interact with data base
mongoose.connect("mongodb://localhost:27017/lpu").then (() =>
    {
        app.listen(8080, ()=>{
            console.log("server is running on port 8080");
        });
});

//schema
const userSchema = new mongoose.Schema({
    username: {type:String},
    email: {type: String, unique: false},
    password: {type: String },
    role: {type: String, default:"user"},
},
  { timestamps: true} 
);

const userModel = mongoose.model("User",userSchema)

app.post("/register",async(req,res)=>{
    try{
    const {username,email,password} = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const user = {
        username,
        email,
        password:hashedpwd,
    };
    const result = await userModel.create(user);
    res.status(201).json( result );
}
catch(err){
    console.log(err)
    res.status(500).json({message:"Something went wrong"})
}
});


