const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('API /tarefas', () => {
  let tarefaId;

  test('GET /tarefas => 200 e JSON', async () => {
    const res = await request.get('/tarefas');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('POST /tarefas => 201 e JSON (cria tarefa)', async () => {
    const res = await request.post('/tarefas')
      .send({ nome: 'Estudar Node', concluida: false });
    expect(res.status).toBe(201);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.id).toBeDefined();
    tarefaId = res.body.id;
  });

  test('GET /tarefas/:id => 200 e JSON', async () => {
    const res = await request.get(`/tarefas/${tarefaId}`);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });


  test('GET /tarefas/9999 => 404 e JSON', async () => {
    const res = await request.get('/tarefas/9999');
    expect(res.status).toBe(404);
    expect(res.body.msg).toBe('Tarefa não encontrada');
  });


  test('PUT /tarefas/:id => 200 e JSON (atualiza)', async () => {
    const res = await request.put(`/tarefas/${tarefaId}`)
      .send({ nome: 'Estudar Node e Express', concluida: true });
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });


  test('PUT /tarefas/9999 => 404 e JSON', async () => {
    const res = await request.put('/tarefas/9999')
      .send({ nome: 'x', concluida: true });
    expect(res.status).toBe(404);
    expect(res.body.msg).toBe('Tarefa não encontrada');
  });


  test('DELETE /tarefas/:id => 204 sem conteúdo', async () => {
    const res = await request.delete(`/tarefas/${tarefaId}`);
    expect(res.status).toBe(204);
    expect(res.text).toBe('');
  });


  test('DELETE /tarefas/9999 => 404 e JSON', async () => {
    const res = await request.delete('/tarefas/9999');
    expect(res.status).toBe(404);
    expect(res.body.msg).toBe('Tarefa não encontrada');
  });
});
