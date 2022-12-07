const express = require('express');
const { hash, compare } = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
  const {
    name, mail, password, phone,
  } = req.body;

  if (!name || !mail || !password || !phone) return res.sendStatus(400);

  const hashPassword = await hash(password, 10);

  const [user, isCreated] = await User.findOrCreate({
    where: { name, mail, phone },
    defaults: {
      name, mail, phone, password: hashPassword,
    },
  });

  if (!isCreated) return res.sendStatus(400);
  req.session.user = {
    id: user.id, name: user.name, mail: user.mail, phone: user.phone,
  };
  res.json(user);
});

router.post('/auth', async (req, res) => {
  const {
    mail, password,
  } = req.body;

  if (!mail || !password) return res.sendStatus(400);

  const user = await User.findOne({ where: { mail } });
  if (!user) return res.sendStatus(400);

  const isPassValid = await compare(password, user.password);
  if (!isPassValid) return res.sendStatus(400);

  req.session.user = {
    id: user.id, mail: user.mail,
  };

  res.json(user);
});

router.post('/check', (req, res) => {
  if (req.session?.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
