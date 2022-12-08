/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      geo: 'Москва, Цветной бульвар, 27/24',
      title: 'Вынести бытовой мусор',
      text: 'После ремонта осталось много мусора, и его нужно вынести из квартиры. Нужно сделать до ближайших выходных.',
      date: '10-12-2022',
      price: 1200,
      author: 1,
      worker: 1,
      categoryId: 1,
      status: 'Ждет исполнителя',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      geo: 'Москва, Таганская площадь, 10',
      title: 'Переезд',
      text: 'Переезжаю на новую квартиру, нужно пару грузовиков для перевозки мебели.',
      date: '12-12-2022',
      price: 4200,
      author: 1,
      worker: 1,
      categoryId: 2,
      status: 'Ждет исполнителя',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      geo: 'Москва, Смоленский бульвар, 1/2',
      title: 'Посылка',
      text: 'Нужно забрать посылку с почты, бабушка отправила огурчики :)',
      date: '10-12-2022',
      price: 500,
      author: 1,
      worker: 1,
      categoryId: 1,
      status: 'На рассмотрении',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      geo: 'Москва, Садовая-Кудринская улица, 1',
      title: 'Кран',
      text: 'Течет кран, просьба заехать и подкрутить где нужно.',
      date: '09-12-2022',
      price: 6900,
      author: 1,
      worker: 1,
      categoryId: 4,
      status: 'На рассмотрении',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      geo: 'Москва, улица Земляной Вал, 9',
      title: 'Собака',
      text: 'Уезжаю на неделю в отпуск, не с кем оставить собаку, нужно будет дважды в день с ней гулять по часу.',
      date: '09-12-2022',
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
