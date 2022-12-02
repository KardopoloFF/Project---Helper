'use strict';
const { hash } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const pass = 'adam123';
    const hashPass = await hash(pass, 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'Adam',
      mail: 'Adam@mail.ru',
      password: hashPass,
      phone: '88005553535',
      img: null,
      isModer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
