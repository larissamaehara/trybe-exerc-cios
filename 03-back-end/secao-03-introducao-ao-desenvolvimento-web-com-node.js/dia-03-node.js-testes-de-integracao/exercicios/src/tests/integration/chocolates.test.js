const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

// eslint-disable-next-line max-lines-per-function
describe('Testando a API Cacau Trybe', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', () => {
    it('Retorna a lista completa de chocolates!', async () => {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
    it('Retorna o chocolate Mounds', async () => {
      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });
  });

  // eslint-disable-next-line sonarjs/no-identical-functions
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
    // eslint-disable-next-line sonarjs/no-identical-functions
    it('Retorna o chocolate Mounds', async () => {
      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });
  });
});

// Criando os testes de integração para o endpoint GET /chocolates/total

// 1 - Crie os testes de integração para o endpoint GET /chocolates/total
describe('Usando o método GET em /chocolates/total', () => {
  it('Retorna a quantidade total de chocolates', async () => {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});

// 3 - Crie os testes de integração para o endpoint GET /chocolates/search

// eslint-disable-next-line max-lines-per-function
describe('Usando o método GET em /chocolates/search', () => {
      it('Retorna os chocolates que contém "Mo" no nome', async () => {
        const response = await chai
          .request(app)
          .get('/chocolates/search?name=Mo');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal([
          {
            id: 3,
            name: 'Mon Chéri',
            brandId: 2,
          },
          {
            id: 4,
            name: 'Mounds',
            brandId: 3,
          },
        ]);
      });

      it('Retorna um array vazio ao não encontrar nenhum chocolate', async () => {
        const response = await chai
          .request(app)
          .get('/chocolates/search?name=ZZZ');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal([]);
      });
    });

// 5 - Crie os testes de integração para o endpoint PUT /chocolates/:id
// eslint-disable-next-line max-lines-per-function
describe('Usando o método PUT em /chocolates/:id', () => {
  it('Atualiza um chocolate existente', async () => {
    const response = await chai
      .request(app)
      .put('/chocolates/1').send({
      name: 'Mint Pretty Good',
      brandId: 2,
    });

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 1,
      name: 'Mint Pretty Good',
      brandId: 2,
    });
  });
    
  it('Se o chocolate não existe, gera um erro', async () => {
    const response = await chai
      .request(app)
      .put('/chocolates/555').send({
      name: 'Mint Pretty Good',
      brandId: 2,
      });
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({
      message: 'chocolate not found',
    });
  });
});