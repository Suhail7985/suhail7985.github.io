import express from 'express'

const app = express()



app.listen(8080, () => {
    console.log('Server is running on port 8080')
});

app.get("/",(req,res) => {
    res.send("Good Morning suhail")
})