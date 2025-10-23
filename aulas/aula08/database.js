const { MongoClient } = require('mongodb');

const url = " " //url mongodb

const client = new MongoClient(url);

async function conectar() {
    try {
        await client.connect();
        console.log("Conectado");
        return client.db("agenda");
        }
    catch(e){
        console.log("erro ao conectar no mongodb", e.message);
    }
}

module.exports = conectar;