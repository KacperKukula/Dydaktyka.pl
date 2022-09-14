const express = require("express")
const router = express.Router()

const mongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017'
const dbname = 'Dydaktyka'

const crypto = require('crypto');
const salt = "2O997mjT1kxx7lnrwYtadw"
const hash = crypto.createHmac("sha256", salt);
//passwd = "@pples123!"
//d74d91494ae314949cfc67920d75d9b77bf3ddede0a4027bf5aab20c7e33fdfb

router.post("/", (req, res) => {
    mongoClient.connect(uri, {}, (error, client) => {
        
        const name = req.body.login
        const passwd = hash.update(req.body.passwd).digest("hex");
        
        const db = client.db(dbname)

        db.collection('users').find({}).toArray((error, result)=>{
            if(error)
                res.send("Błąd")
            else
                res.send("Task filed successfully <3 "+result[0].name)

            console.log(result)
        })
    })
})

module.exports = router