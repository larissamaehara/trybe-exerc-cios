const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { driverController } = require('../../../src/controllers');
const {
  driversFromModel,
  driversFromServiceSuccessful,
  driverFromServiceNotFound,
} = require('../mocks/driver.mock');

describe('Realizando testes - PASSENGER CONTROLLER:', function () {
  it('Recuperando drivers com sucesso - status 200', async function () {
    sinon.stub(driverService, 'findAll').resolves(driversFromServiceSuccessful);

    const req = { params: { }, body: { } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(driversFromModel);
  });

  it('Não recupera driver com id inexistente - status 404', async function () {
    sinon.stub(driverService, 'findById').resolves(driverFromServiceNotFound);

    const req = { params: { id: 999999 }, body: { } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Inserindo driver com sucesso - status 201', async function () {
    sinon.stub(driverService, 'createDriver').resolves(driverFromServiceCreated);

    const req = {
      params: { },
      body: { name: 'Bêatrice Navarro' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.createDriver(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newDriverFromModel);
  });

   it('Não insere driver com name menor que 3 caracteres - status 422', async function () {
    sinon.stub(driverService, 'createDriver').resolves(driverFromServiceInvalidValue);

    const req = { params: { }, body: { name: 'Bê' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.createDriver(req, res);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  
  afterEach(function () {
    sinon.restore();
  });
});