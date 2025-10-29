const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe ('Teste do recurso /produtos', () => {
test('POST /produtos deve retornar 201', async() => {
    const response = await request(app).post(url).send({nome: "Laranja", preco: 10.0});
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
   
test('GET / deve retornar 200', async() => {
    const response = await request(app).get(url);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body).toBe(true))
})
}


)