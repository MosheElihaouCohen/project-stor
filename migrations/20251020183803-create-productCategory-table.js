'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductCategory', {
     productId: {
            autoIncrement: true,
            primaryKey: true,
           type: Sequelize.INTEGER
        },
        categoyId : {
            allowNull: false,
            type: Sequelize.INTEGER
        },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductCategory');
  }
};