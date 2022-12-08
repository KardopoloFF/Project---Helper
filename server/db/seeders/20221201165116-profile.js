const { hash } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const pass = '123';
    const hashPass = await hash(pass, 10);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Александр',
        mail: 'sasha@mail.ru',
        password: hashPass,
        phone: '89998887766',
        img: 'https://sun1.userapi.com/sun1-86/s/v1/if1/8HCDjT9lQkIuhOHimGeuG6HP_trKfhM200aRX1RcNgF9qqilw147tu3iXT2kQGSy7gt9joXH.jpg?size=1440x2160&quality=96&type=album',
        isModer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Адам',
        mail: 'adam@mail.ru',
        password: hashPass,
        phone: '87776665544',
        img: 'https://sun9-east.userapi.com/sun9-36/s/v1/ig2/TaY1ECsfT97TqmfBGiVSVj3o6PCUVciCrkAQjqncgzhRsXq88jqREsBITMP34PY7P5V3_9poiFb2INaISCSybdF6.jpg?size=2166x2160&quality=96&type=album',
        isModer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Валерия',
        mail: 'valeria@mail.ru',
        password: hashPass,
        phone: '87726661544',
        img: 'https://proslo.ru/wp-content/uploads/2022/03/anon2.jpg',
        isModer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Андрей',
        mail: 'andrei@mail.ru',
        password: hashPass,
        phone: '81176665044',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwp-jhNgScTxiimxDFPRhMLgJorIWYUrWrumc_GoTCda0_6cD0FLsGyYvEv2dUDcinBg&usqp=CAU',
        isModer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Роман',
        mail: 'roman@mail.ru',
        password: hashPass,
        phone: '81176665000',
        img: 'https://kartinkin.net/uploads/posts/2022-02/1644882107_1-kartinkin-net-p-anonimus-kartinki-1.jpg',
        isModer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Виктория',
        mail: 'victoria@mail.ru',
        password: hashPass,
        phone: '81236615000',
        img: 'https://st.depositphotos.com/1670531/2558/i/600/depositphotos_25582211-stock-photo-man-in-suit-wearing-vendetta.jpg',
        isModer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кирилл',
        mail: 'kirill@mail.ru',
        password: hashPass,
        phone: '81936315021',
        img: 'https://www.meme-arsenal.com/memes/3293222ac3dbaba76006c0b28cbb8b60.jpg',
        isModer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
