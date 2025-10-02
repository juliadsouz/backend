
let tarefas = [];
let idAtual = 1;

function listar() {
  return tarefas;
}

function buscarPeloId(id) {
  return tarefas.find(t => t.id == id);
}

function criar(tarefa) {
  const nova = { id: idAtual++, nome: tarefa.nome, concluida: !!tarefa.concluida };
  tarefas.push(nova);
  return nova;
}

function atualizar(tarefa) {
  const existente = buscarPeloId(tarefa.id);
  if (!existente) return null;

  existente.nome = tarefa.nome ?? existente.nome;
  existente.concluida = tarefa.concluida ?? existente.concluida;
  return existente;
}

function remover(id) {
  const index = tarefas.findIndex(t => t.id == id);
  if (index === -1) return null;

  tarefas.splice(index, 1);
  return true;
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };
