const supertest = require('supertest');
const app = require('../app.js');
const request = supertest(app);

const url = '/usuarios';

let usuarioId = null;
let tokenSalvo = null;

describe('Teste do recurso /usuarios', () => {

  
  test("POST /usuarios deve retornar 201", async () => {
    const response = await request.post(url)
      .send({
        email: 'usuario@email.com',
        senha: 'abcd1234'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.email).toBe('usuario@email.com');

    usuarioId = response.body._id;
  });

  
  test("POST /usuarios sem JSON deve retornar 422", async () => {
    const response = await request.post(url).send({});
    expect(response.status).toBe(422);
    expect(response.body.msg).toBe("Email e Senha são obrigatórios");
  });

  
  test("POST /usuarios/login deve retornar 200 e um token", async () => {
    const response = await request.post(`${url}/login`)
      .send({
        usuario: "usuario@email.com",
        senha: "abcd1234"
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");

    tokenSalvo = response.body.token;
  });


  test("POST /usuarios/login sem JSON deve retornar 401", async () => {
    const response = await request.post(`${url}/login`).send({});
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe("Credenciais inválidas");
  });


  test("POST /usuarios/renovar com token válido deve retornar 200", async () => {
    const response = await request.post(`${url}/renovar`)
      .set("authorization", tokenSalvo);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });


  test("POST /usuarios/renovar com token inválido deve retornar 401", async () => {
    const response = await request.post(`${url}/renovar`)
      .set("authorization", "Bearer 123456789");

    expect(response.status).toBe(401);
    expect(response.body.msg).toBe("Token Inválido");
  });


  test("DELETE /usuarios/:id com token válido deve retornar 204", async () => {
    const response = await request.delete(`${url}/${usuarioId}`)
      .set("authorization", tokenSalvo);

    expect(response.status).toBe(204);
  });

});
