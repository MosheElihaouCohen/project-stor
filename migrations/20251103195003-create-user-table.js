'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
            autoIncrement: true,
            primaryKey: true,
           type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
           type: Sequelize.STRING
        },
        password:{
           type: Sequelize.STRING
        },
        email:{
          type: Sequelize.STRING
        },
        token:{
           type: Sequelize.STRING
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};