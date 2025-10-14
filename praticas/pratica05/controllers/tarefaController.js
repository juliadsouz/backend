
const tarefaModel = require('../models/tarefaModel');

function listar(req, res) {
  res.json(tarefaModel.listar());
}

function buscarPeloId(req, res) {
  const id = req.params.tarefaId;
  const tarefa = tarefaModel.buscarPeloId(id);
  if (tarefa) return res.json(tarefa);
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

function criar(req, res) {
  const nova = tarefaModel.criar(req.body);
  res.status(201).json(nova);
}

function atualizar(req, res) {
  const tarefa = { ...req.body, id: req.params.tarefaId };
  const atualizada = tarefaModel.atualizar(tarefa);
  if (atualizada) return res.json(atualizada);
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

function remover(req, res) {
  const id = req.params.tarefaId;
  const removida = tarefaModel.remover(id);
  if (removida) return res.status(204).end();
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };
