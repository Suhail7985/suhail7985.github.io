import express from 'express'
const app = express ()
app.listen(8080,()=> {
    console.log('server is running on port 8080')
})


const logger = ((req,res,next)=>{
    req.msg = "Hello";
    next();
});
app.use(logger);

app.get("/",(req,res)=>{
    res.send(req.msg + " World!")

})


app.get("/products",(req,res)=>{
    res.send(req.msg + " Products!")

})
