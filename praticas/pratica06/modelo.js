const {conectarDb} = require('./database')

class Tarefa {
    db = null;
    collection = null;


    constructor(nome,concluida) {
        this.id = 'null';
        this.name = nome;
        this.concluida = concluida;
    };


    async init() {
        this.db = await conectarDb();
        this.collection = this.db.collection('tarefas');
    };
       

async inserir() {
    const resultado = await collection.insertOne({
        nome: this.nome,
        concluida: this.concluida
    })
    this.id = resultado.insertedId;
};

async alterar() {
    await collection.updateOne({
         _id: this.id}, { $set: { nome: this.nome, concluida: this.concluida } });
};

async deletar() {
    await collection.deleteOne({ nome: this.nome});
    
};

async buscar() {
    const resultado = await collection.findOne({nome: this.nome});
};
};

module.exports = {Tarefa};
