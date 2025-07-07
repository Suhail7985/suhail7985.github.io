import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "secretkey";
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

//login register and also return token number

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const userObj = {
          username: existingUser.username,
          email: existingUser.email,
          role: existingUser.role,
        };
        const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
        res.status(200).json({ user: userObj, token });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

//update user through email
//role: admin
app.post("/update/:email", async (req, res) =>
  {
    try {
      const { email } = req.params; 
      const { role } = req.body;
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        existingUser.role = role;
        await existingUser.save();
        res.status(200).json({ message: "User updated successfully" });
        } else {
          res.status(400).json({ message: "User not found" });
          }
          } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
            }
            });

