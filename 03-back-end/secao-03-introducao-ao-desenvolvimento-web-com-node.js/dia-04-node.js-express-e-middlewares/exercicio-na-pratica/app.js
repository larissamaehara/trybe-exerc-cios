// Crie o arquivo app.js. Agora, importe a biblioteca express e chame a função em uma variável.
const express = require('express');

// Importação do arquivo middlewares/validateName.js para o app.js

const validateName = require('./middlewares/validateName');

// Realiza-se a importação do arquivo middlewares/validatePrice.js para o app.js

const validatePrice = require('./middlewares/validatePrice');

// Importação do arquivo middlewares/validateDescription.js para o app.js

const validateDescription = require('./middlewares/validateDescription');

// Importação do arquivo middlewares/validateCreatedAt.js para o app.js

const validateCreatedAt = require('./middlewares/validateCreatedAt');

// Importação do arquivo middlewares/validateRating.js para o app.js

const validateRatting = require('./middlewares/validateRatting');

// Importação do arquivo middlewares/validateDifficulty.js para o app.js

const validateDifficulty = require('./middlewares/validateDifficulty');

// Importação do arquivo utils/generateToken.js para o app.js
const generateToken = require('./utils/generateToken');

// Importação do arquivo middlewares/auth.js para o app.js
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json()); // Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.

app.post('/signup', (req, res) => { // Crie um endpoint POST com a rota /signup para cadastrar novos usuários.
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();

  return res.status(200).json({ token });
}); 

app.post('/activities',
  auth,
  validateDifficulty,
  validateRatting,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => { // Crie um endpoint POST com a rota /activities para adicionar novas atividades.
  res.status(201).json({ message: 'Atividade registrada com sucesso' });
});

module.exports = app;