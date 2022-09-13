const express = require("express")
const router = express.Router()

const mongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017'
const dbname = 'Dydaktyka'

const crypto = require('crypto');
const salt = "2O997mjT1kxx7lnrwYtadw"
const hash = crypto.createHmac("sha256", salt);
//passwd = "@pples123"

router.post("/", (req, res) => {
    mongoClient.connect(uri, {}, (error, client) => {
        // if(error) 
        //     console.log("Can not connect to DB")
        // else
        //     console.log("Connected successfully!")
        
        input = hash.update(input).digest("hex");
        console.log(input)
        
        const db = client.db(dbname)

        db.collection('users').find
    })
})

module.exports = router