// src/migrations/[timestamp]-create-user.js

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando.
    // objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.
    await queryInterface.createTable('Users', {
      id: { // identificador do item
        allowNull: false, //allowNull: Define se o campo pode ou não receber um valor null;
        autoIncrement: true, //autoIncrement: Define se o campo vai ter incremento automático;
        primaryKey: true, //primaryKey: Define se o campo é chave primária;
        type: Sequelize.INTEGER //type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.
      },
      fullName: { // nome completo do usuário da aplicação
        type: Sequelize.STRING
      },
      email: { // email do usuário da aplicação
        type: Sequelize.STRING
      },
      createdAt: { // data de criação do item
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: { // data de atualização do item
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
