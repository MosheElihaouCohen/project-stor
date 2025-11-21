'use strict';
const categoryData = require('../data/category.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
     
    await queryInterface.bulkInsert('category', categoryData, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('category', null, {});
  }
};
