import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express();
const SECRET = "sometext";
app.listen(8080, () => {
  console.log("Server started");
});
let users = [];

app.use(express.json());

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.json({ message: "Access Denied" });
  }
};


const authorize = (role)=>{
    return (req, res, next) =>{
        if (req.role === role) {
            next();
        } else {
          return res.json({ message: "Unauthorized Access"});
        }
}
}




app.post("/login", (req, res) => {

  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found, SECRET);
    res.status(200).json({ user: found, token });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});

app.post("/register",(req,res)=>{
    const {name,email,password,role}=req.body;
    const hashedPassword = bcrypt.hash(password, 10);
    const user = {name,email,password:hashedPassword,role};
    users.push(user);
    res.json(user)

    })


app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1MTYyNDQxNH0.nWR49LAa6siMGmKI_xedcIArzsGlhfVvgt2ir6xABWg

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhdGh5QGVtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MTYyNjc5NSwiZXhwIjoxNzUxNjMwMzk1fQ.VdZp366zwI2IY9V4YjikBFnfyp6q1XhF5qFtAw1roU0