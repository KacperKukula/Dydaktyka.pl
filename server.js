//plugins
const express = require("express")
const session = require("express-session")
let app = express();
//MongoDB
const {client} = require("./MongoDB.js")

//Crypto plugin and passes
const crypto = require('crypto');
const salt = "2O997mjT1kxx7lnrwYtadw"
const hash = crypto.createHmac("sha256", salt);
//passwd = "@pples123!"
//d74d91494ae314949cfc67920d75d9b77bf3ddede0a4027bf5aab20c7e33fdfb

//session 
app.use(session({
    secret: "SMcXillnHTlmNY",
    cookie: {maxAge: 10000},
    resave: true,
    saveUninitialized: false
}))

//Basic Setup
const port = 2020
app.use(express.static("./public"))
app.use(express.urlencoded( {extended: true} ))
app.set("view engine", "ejs")

//Services
app.get("/", (req, res)=>{
    res.render("login.ejs")
})
    .post("/", (req, res)=>{
        if(!req.body.login || !req.body.passwd) {
            //res.statusCode = 403
            res.redirect("/")
        }
        else {
        
            client.connect()
        
            const name = req.body.login
            const passwd = "d74d91494ae314949cfc67920d75d9b77bf3ddede0a4027bf5aab20c7e33fdfb"
            //hash.update(req.body.passwd).digest("hex");

            res.send("Wykonano")
        }
    })

//Routes
// const loginRouter = require('./routes/login.js')
// app.use("/login", loginRouter)

app.listen(port)