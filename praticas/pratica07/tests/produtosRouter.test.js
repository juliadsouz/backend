const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

const url = '/produtos';

let id = null;

describe ('Teste do recurso /produtos', () => {
    test('POST /produtos deve retornar 201', async() => {
    const response = await request.post(url).send({nome: "Laranja", preco: 10.0});
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
    expect(response.body.nome).toBe("Laranja");
    expect(response.body.preco).toBe(10.0);

        id = response.body._id;
    });

    test('POST /produtos deve retornar 422', async() => {
    const response = await request.post(url).send({
        nome: "   "
        });
    expect(response.status).toBe(422);
    expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios")
        
    });
   
    test('GET /produtos deve retornar 200', async() => {
    const response = await request.get(url);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true)
})

     test('GET /produtos/id deve retornar 200', async() => {
        const response = (await request.get(`${url}/${id}`));
        expect(response.status).toBe(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preco).toBe(10.0);
        
    });

    test("GET /produtos/0 deve retornar 400", async () => {
        const response = await request.get(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro Inválido");
      });

    test('GET/produtos/000000000000000000000000 deve retornar 404', async() => {
        const response = await request.put(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });

    test("PUT /produtos/id deve retornar 200", async () => {
        const response = (await request.put(`${url}/${id}`).send({nome: "Laranja Pera", preco: "18.00"}));
        expect(response.status).toBe(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja Pera");
        expect(response.body.preco).toBe(18.00);
      });

    test("PUT /produtos/id deve retornar 422", async () => {
       const response = await request.put(`${url}/${id}`).send({});
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
      });

    test('PUT /000000000000000000000000 deve retornar 404"', async () => {
    const response = await request.put(`${url}/000000000000000000000000`);
    expect(response.status).toBe(404);
    expect(response.body.msg).toBe("Produto não encontrado");
  });

   test('DELETE /produtos/id deve retornar 204', async () => {
    const response = await request.delete(`${url}/${id}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });


  test('DELETE /produtos/0 deve retornar 400', async () => {
    const response = await request.delete(`${url}/0`);
    expect(response.status).toBe(400);
 expect(response.body.msg).toBe("Parâmetro Inválido");
  });


  test('DELETE /000000000000000000000000 deve retornar 404', async () => {
    const response = await request.delete(`${url}/000000000000000000000000`);
    expect(response.status).toBe(404);
    expect(response.body.msg).toBe("Produto não encontrado");
  });
});

