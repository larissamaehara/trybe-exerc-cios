// Crie o arquivo app.js. Agora, importe a biblioteca express e chame a função em uma variável.
const express = require('express');
// Importação do arquivo middlewares/validateName.js para o app.js
// Adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.

const validateName = require('./middlewares/validateName');

// Realiza-se a importação do arquivo middlewares/validatePrice.js para o app.js
// Adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades

const validatePrice = require('./middlewares/validatePrice');

// Importação do arquivo middlewares/validateDescription.js para o app.js
// Adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.

const validateDescription = require('./middlewares/validateDescription');

// Importação do arquivo middlewares/validateCreatedAt.js para o app.js
// Adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.

const validateCreatedAt = require('./middlewares/validateCreatedAt');

// Importação do arquivo middlewares/validateRating.js para o app.js
// Adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.

const validateRatting = require('./middlewares/validateRatting');

const app = express();

app.use(express.json()); // Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.

app.post('/activities',
  validateRatting,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => { // Crie um endpoint POST com a rota /activities para adicionar novas atividades.
  res.status(201).json({ message: 'Atividade registrada com sucesso' });
});

module.exports = app;