//plugins
const express = require("express")
const session = require("express-session")
let app = express();

//session 
app.use(session({
    secret: "SMcXillnHTlmNY",
    cookie: {maxAge: 10000},
    resave: true,
    saveUninitialized: false
}))

//setup
const port = 2020
app.use(express.static("./public"))
app.use(express.urlencoded( {extended: true} ))
app.set("view engine", "ejs")

//Services
app.get("/", (req, res)=>{
    if(req.session.authenticated) {
        res.render("panel.ejs")    
    } else
        res.render("login.ejs") //Main site is login site
})

//Routes
const loginRouter = require('./routes/login.js')
app.use("/login", loginRouter)

app.listen(port)