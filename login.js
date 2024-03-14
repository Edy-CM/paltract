const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("login.ejs")
})
app.get("/register", (req, res)=>{
    res.render("index.ejs", {correctPasswords: 0})
})
app.listen(port, (req, res)=> {
    console.log(`Server running on: http://localhost:${port}`)
})