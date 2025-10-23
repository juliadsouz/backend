const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    nome: {type: String, required: [true, 'Nome da tarefa é obrigatorio'], trim: true, minLength: [3, "Nome da tarefa deve ter no minimo 3 caracteres"]}, 
    concluida: Boolean
});

module.exports = mongoose.model('Tarefa', schema)