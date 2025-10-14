const { MongoClient } = require('mongodb');
const url = "mongodb+srv://julia:<db_password>@cluster0.niqabin.mongodb.net/";
const client = new MongoClient(url);

async function conectarDb() {
    await client.connect()
    return client.db('agenda')
}

module.exports = {conectarDb};
