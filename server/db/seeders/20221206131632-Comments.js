/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        text: 'чел хорош',
        author: 2,
        addresat: 1,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'чел плох',
        author: 3,
        addresat: 1,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'мегасуперхорош',
        author: 2,
        addresat: 1,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'В порядке',
        author: 3,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Босс',
        author: 2,
        addresat: 1,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'N',
        author: 3,
        addresat: 1,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'I',
        author: 2,
        addresat: 1,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Stop',
        author: 3,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
