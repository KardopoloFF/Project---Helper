/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      geo: '55.75, 37.62',
      title: 'Вынести бытовой мусор',
      text: 'После ремонта осталось много мусора, и его нужно вынести из квартиры. Нужно сделать до ближайших выходных.',
      date: '2022-12-10',
      price: 1200,
      author: 1,
      worker: 1,
      categoryId: 1,
      status: 'Ждет исполнителя',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Tasks', [{
      geo: '59.94, 30.31',
      title: 'Переезд',
      text: 'Переезжаю на новую квартиру, нужно пару грузовиков для перевозки мебели.',
      date: '2022-12-12',
      price: 4200,
      author: 1,
      worker: 1,
      categoryId: 2,
      status: 'Ждет исполнителя',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Tasks', [{
      geo: '54.71, 20.51',
      title: 'Посылка',
      text: 'Нужно забрать посылку с почты, бабушка отправила огурчики :)',
      date: '2022-12-14',
      price: 500,
      author: 1,
      worker: 1,
      categoryId: 1,
      status: 'На рассмотрении',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Tasks', [{
      geo: '42.98, 47.5',
      title: 'Кран',
      text: 'Течет кран, просьба заехать и подкрутить где нужно.',
      date: '2022-12-09',
      price: 6900,
      author: 1,
      worker: 1,
      categoryId: 4,
      status: 'На рассмотрении',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Tasks', [{
      geo: '59.94, 30.31',
      title: 'Собака',
      text: 'Уезжаю на неделю в отпуск, не с кем оставить собаку, нужно будет дважды в день с ней гулять по часу.',
      date: '2022-12-22',
      price: 12000,
      author: 1,
      worker: 1,
      categoryId: 5,
      status: 'В работе',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
