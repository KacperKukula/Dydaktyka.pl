//MongoDB client
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://application:OVkR5Z6FjPJIVI9Y@clusterdydaktyka.3lljaw9.mongodb.net/test'
const client = new MongoClient(uri)

module.exports = {client}