const port = 2020

const express = require("express")

let app = express();

app.use(express.static("./public"))
app.use(express.urlencoded( {extended: true} ))

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("login.ejs")
})

const loginRouter = require('./routes/login.js')

app.use("/login", loginRouter)

app.listen(port)