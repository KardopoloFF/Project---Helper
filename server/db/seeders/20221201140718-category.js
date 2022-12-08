'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
    {
      name: 'Бытовые услуги',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Грузоперевозки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Курьерские услуги',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Компьютерная помощь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Красота и здоровье',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
