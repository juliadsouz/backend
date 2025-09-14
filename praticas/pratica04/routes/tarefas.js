const express = require('express');
const router = express.Router();

const tarefas = [
  { id: 1, nome: "Estudar middleware", concluida: false },
  { id: 2, nome: "Praticar Express", concluida: true }
];

router.get('/', (req, res) => {
  res.json(tarefas);
});

router.post('/', (req, res) => {
  const novaTarefa = req.body;
  const maiorId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) : 0;
  novaTarefa.id = maiorId + 1;
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

router.get('/:tarefaId', (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const tarefa = tarefas.find(t => t.id === tarefaId);
  if (!tarefa) {
      return next(new Error("Tarefa não localizada"));
  }
  res.json(tarefa);
});

router.put('/:tarefaId', (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const dadosAtualizados = req.body;
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) {
    return next(new Error("Tarefa não localizada"));
  }
  tarefas[index] = { ...tarefas[index], ...dadosAtualizados };
  res.json(tarefas[index]);
});

router.delete('/:tarefaId', (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) {
    return next(new Error("Tarefa não localizada"));
  }
  tarefas.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
