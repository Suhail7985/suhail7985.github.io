

import express from 'express';


const Router = express.Router()

Router.post("/register", (req, res) =>{
        res.send("Register page")
});
Router.post("/login", (req, res) => {
        res.send("Login page")
        });
Router.get("/show", (req, res) =>{
    res.send("Show users")
})

export default Router;