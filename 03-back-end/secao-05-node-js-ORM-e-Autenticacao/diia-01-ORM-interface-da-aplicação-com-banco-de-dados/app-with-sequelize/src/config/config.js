// src/config/config.js

const config = {
  username: process.env.MYSQL_USER, // username: usuário de acesso ao banco de dados;
  password: process.env.MYSQL_PASSWORD, // password: senha de acesso ao banco de dados;
  database: process.env.MYSQL_DATABASE, // database: nome do banco de dados no qual queremos conectar;
  host: process.env.MYSQL_HOST, // host: servidor no qual estamos conectando - por ser local, utilizamos o endereço IP 127.0.0.1, ou seu alias localhost;
  dialect: 'mysql', // dialect: informa qual a biblioteca que o sequelize utiliza para se conectar ao banco de dados estamos utilizando. Nesse caso, mysql.
};

module.exports = {
  development: config,
  test: config,
  production: config,
};