'use strict';
const productCategoryData = require('../data/productCategory.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
     
    await queryInterface.bulkInsert('productCategory', productCategoryData, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('productCategory', null, {});
  }
};