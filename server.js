const port = 2020

const express = require("express")

let app = express();

app.use(express.static("./public"))

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.listen(port, ()=>{console.log("1")})