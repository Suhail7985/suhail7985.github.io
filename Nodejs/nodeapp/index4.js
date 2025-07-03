import express from 'express'
const app = express ()
app.listen(8080,()=> {
    console.log('server is running on port 8080')
})


// const logger = ((req,res,next)=>{
//     req.msg = "Hello world";
//     next();
// });
// app.use(logger);

// app.get("/",(req,res)=>{
//     res.send(req.msg + " World!")

// })


// app.get("/products",(req,res)=>{
//     res.send(req.msg + " Products!")

// })


// if i gve localhost:8080/john print hello world other wise accces denied


const auth = (req,res,next)=>{
    const name = req.params.name
    if(name === "john"){
        next();
}
else{
    res.send("Access Denied")
}
}
app.use("/:name",auth,(req,res)=>
    {
        res.send("Hello world")
})