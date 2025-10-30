const mongoose = require('mongoose')
const Produto = require("../models/produtosModel.js");

async function criar (req, res) {
    try {
    const novoproduto = await Produto.create({
    nome: req.body.nome,
    preco: req.body.preco
    })
return res.status(201).json({  
        _id: novoproduto._id, 
        nome: novoproduto.nome, 
        preco: novoproduto.preco}); 
} catch(err) {
        if(err.errors){
        return res.status(422).json({msg: "Nome e preço do produto são obrigatórios"});
        }
    }
    return res.status(500).json({})
}

async function listar(req, res){
    const produtosCadastrados = await Produto.find({});
    return res.status(200).json(produtosCadastrados);
};

async function buscar (req, res, next){
    const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid((id))) {
            return res.status(400).json({msg:"Parâmetro Inválido"});
            
        }
        const produtoEncontrado = await Produto.findOne({_id: id})
        if (produtoEncontrado) {
            req.produto = produtoEncontrado;
        return next();
        }
        else res.status(404).json({msg: "Produto não encontrado"})
}

async function exibir (req, res) {
    res.status(200).json(req.produto);
}

async function atualizar (req, res) {
  try{  
    const {id} = req.params; 

        if (!req.body.nome || !req.body.preco) {
        return res.status(422).json({ msg: "Nome e preço do produto são obrigatórios" });
}
    const produtoAtualizado = await Produto.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true, runValidators: true })
  res.status(200).json(produtoAtualizado);

} catch (err) {
    if(err.errors) {
        return res.status(422).json({msg: "Nome e preço do produto são obrigatórios"});

    }
}
}

async function remover(req, res) {
    const { id } = req.params;
    const produtoRemovido = await Produto.findOneAndDelete({id})
    return res.status(204).end();
}

module.exports = { criar, listar, buscar, exibir, atualizar, remover };