//express static
import express from 'express'
const app = express()
app.use("/images",express.static("images"));    

app.use(express.static("public"));                            //express.static= access the files 


app.listen(8080,() => {
    console.log('server is running on port 8080')
});


app.get("/products", (req,res)=>{
    res.send("products List");
});


app.get("/products/:id", (req,res)=>
    {
        const id = req.params.id;
        res.send(`product id is ${id}`);
        }
        );
    