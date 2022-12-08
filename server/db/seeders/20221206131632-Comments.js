/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        text: 'Помог разобраться с TypeScript - лучший преподаватель!',
        author: 5,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Приятный, прекрасный преподаватель',
        author: 6,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Благодаря нему я понял очень сложную тему. Спасибо! ',
        author: 7,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Лучший!',
        author: 4,
        addresat: 1,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Если бы не Адам, то я бы не поняла redux - спасибо',
        author: 3,
        addresat: 2,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Огромная благодарность за объяснение такой сложной концепции как react. Рекомендую',
        author: 5,
        addresat: 2,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Чуткий и отзывчивый преподаватель',
        author: 7,
        addresat: 2,
        rating: 4,
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
