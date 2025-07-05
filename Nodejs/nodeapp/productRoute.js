 
import express from 'express';

const Router = express.Router()

Router.get("/show", (req, res) =>{
    res.send("Show products")

})
Router.get("/:id", (req, res) =>{
    res.send("Product 1")
});
Router.delete( "/:id", (req, res) =>{
    res.send("Delete user")
    });

export default Router
