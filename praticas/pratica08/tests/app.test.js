const supertest = require('supertest');
const express = require('express');
const app = require('../app');
const { token } = require('morgan');
const request = supertest(app);

test ('GET /produtos deve retornar 401', async () => {
    const response = await request.get('/produtos')
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe("Não autorizado");
}
)
test('GET /produtos com token invalido deve retornar 401', async () => {
    const response = await request.get('/produtos')
    .set('authorization', '123456789')
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe("Token Inválido")
}
)
test('POST /usuarios/login deve retornar 200', async () => {
    const response = await request.post('/usuarios/login')
    .send({ usuario: 'julia@iesb.com', senha: 'abcd1234' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
}

)
test('GET /produtos com token válido deve retornar 200', async () => {
    const response = await request
      .get('/produtos')
      .set('authorization', `Bearer ${token}`);
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /usuarios/renovar deve retornar 200', async () => {
    const response = await request
      .post('/usuarios/renovar')
      .set('authorization', `Bearer ${token}`);
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  
    novoToken = response.body.token;
  });

  test('GET /produtos com novo token deve retornar 200', async () => {
    const token = authorization.split(' ')[]
    const response = await request

      .get('/produtos')
      .set('authorization', `Bearer ${novoToken}`);
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });