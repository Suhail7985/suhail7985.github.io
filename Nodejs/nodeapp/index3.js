import express from 'express'

const app = express()



app.listen(8080, () => {
    console.log('Server is running on port 8080')
});

// app.get("/",(req,res) => {
//     res.send("Good Morning suhail")
// })

// app.get("/user",(req,res) => {
//     res.send("Hello User")
// })

// app.get("/ab*cd",(req,res) => {
//     res.send("Hello world")
// })

const products = [
        {id: 1,name: "Product 1", price: 100},
        {id: 2, name: "Product 2", price: 50},
        {id: 3,name: "Product 3", price: 70}

    ];

app.get("/products/:id",(req,res) => {
    const pid = req.params.id;
    const product = products.find((product) => product.id == pid);
    if(product){
        res.send(product);
        }
        else{
            res.send("Product not found");
            }
})

// app.get("/:name", (req,res) =>{
//     res.send("Hello");
// });


// app.get("/:name", (req,res) =>{
//     res.send(req.params.name);
// });



// app.get("/name", (req,res) =>{
//     res.send("hello");
// });


// app.get("/students/:name", (req,res) =>{
//     res.send(req.params.name);
// });



// app.get("/students/:name/age/:age", (req,res) =>{
//     res.send(req.params.name + req.params.age);
// });



// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization);
// })


// app.get("/",(req,res)=>{
//     res.send(req.query.name + req.query.age);                // localhost:8080/?name=John&age=21     // John21
// })

