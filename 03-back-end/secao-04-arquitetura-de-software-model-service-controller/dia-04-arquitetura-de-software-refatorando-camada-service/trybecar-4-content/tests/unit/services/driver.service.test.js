const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');
const { driverService } = require('../../../src/services');
const {
  driversFromModel,
  driverIdFromModel,
  newDriverFromModel,
} = require('../mocks/driver.mock');

describe('Realizando testes - DRIVERS SERVICE:', function () {
  it('Recuperando drivers com sucesso', async function () {
    sinon.stub(driverModel, 'findAll').resolves(driversFromModel);
    const responseData = [
      { id: 1, name: 'Liana Cisneiros' },
      { id: 2, name: 'Fábio Frazão' },
      { id: 3, name: 'Anastácia Bicalho' },
      { id: 4, name: 'Samara Granjeiro' },
      { id: 5, name: 'Levi Teixeira' },
    ];

    const responseService = await driverService.findAll();

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.have.lengthOf(5);
    expect(responseService.data).to.be.deep.equal(responseData);
  });

  it('Recuperando driver por id com sucesso', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromModel);
    const responseData = { id: 4, name: 'Samara Granjeiro' };

    const inputData = 4;
    const responseService = await driverService.findById(inputData);

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal(responseData);
  });

  it('Não recupera driver com id inexistente', async function () {
    sinon.stub(driverModel, 'findById').resolves(undefined);

    const responseService = await driverService.findById(999999);

    expect(responseService.status).to.be.equal('NOT_FOUND');
    expect(responseService.data.message).to.be.a('string');
    expect(responseService.data.message).to.be.equal('Driver not found');
  });

  it('Inserindo driver com sucesso', async function () {
    sinon.stub(driverModel, 'insert').resolves(driverIdFromModel);
    sinon.stub(driverModel, 'findById').resolves(newDriverFromModel);

    const inputData = { name: 'Bêatrice Navarro' };
    const responseService = await driverService.createDriver(inputData);

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.deep.equal({ id: 6, name: 'Bêatrice Navarro' });
  });

  it('Não insere driver com name menor que 3 caracteres', async function () {
    const inputData = { name: 'Bê' };
    const responseService = await driverService.createDriver(inputData);

    expect(responseService.status).to.be.equal('INVALID_VALUE');
    expect(responseService.data.message)
      .to.be.equal('"name" length must be at least 3 characters long');
  });

  afterEach(function () {
    sinon.restore();
  });
});