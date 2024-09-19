// test/controllers/userController.test.js
const { expect } = require('chai');
const { login } = require('../../src/controllers/userController');
const httpMocks = require('node-mocks-http');

describe('Testes para o Controlador de Login', () => {
  it('Deve retornar um token de autenticação ao fornecer credenciais válidas', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/login',
      body: {
        username: 'user123',
        password: 'senhaSegura'
      }
    });
    const res = httpMocks.createResponse();

    login(req, res);
    const data = res._getJSONData();
    expect(res.statusCode).to.equal(200);
    expect(data).to.have.property('token');
  });

  it('Deve retornar erro 401 para credenciais inválidas', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/login',
      body: {
        username: 'user123',
        password: 'senhaIncorreta'
      }
    });
    const res = httpMocks.createResponse();

    login(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res._getData()).to.equal(JSON.stringify({ message: 'Credenciais inválidas' }));
  });
});
