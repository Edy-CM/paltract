const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;


let correctPasswords = false;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {correctPasswords})
})

app.post("/register", (req, res)=>{
    const {name, lName, email, password, passwordConfirmation } = req.body
    console.log(name, lName, email, password, passwordConfirmation)
    if (password != passwordConfirmation) {
        correctPasswords = true;
        res.render("index.ejs", {correctPasswords} )
    }
    res.render("test.ejs")
    
})

app.get("/login", (req, res)=>{
    res.render("login.ejs")
})

app.get("/register", (req, res) => {
    res.render("index.ejs", { correctPasswords })
})

app.listen(port, (req, res)=> {
    console.log(`Server running on: http://localhost:${port}`)
})