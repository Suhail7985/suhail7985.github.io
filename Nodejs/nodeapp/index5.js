import express from 'express'
const app = express ()
app.listen(8080,()=> {
    console.log('server is running on port 8080')
})


app.use(express.json()); // Middleware to parse JSON

let products = []; 


app.post("/", (req, res) => {
    const {id, name, price} =req.body;
    const obj = {
        id,
        name,
        price,
    }
    products.push(obj);
    res.json({ message: "Product added successfully"});
});


app.get("/", (req, res) => {
    res.json(products);
});
 
//use filter
app.delete("/:id", (req, res) =>
{
 const id = Number(req.params.id);
// const id = req.params.id;
products = products.filter((product) =>product.id !== id);

res.json("Product deleted successfully");
});


