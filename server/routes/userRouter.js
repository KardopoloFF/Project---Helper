const express = require('express');
const { hash, compare } = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
  const {
    name, email, password, phone,
  } = req.body;

  if (!name || !email || !password || !phone) return res.sendStatus(400);

  const hashPassword = await hash(password, 10);

  const [user, isCreated] = await User.findOrCreate({
    where: { name, email, phone },
    defaults: {
      name, email, phone, password: hashPassword,
    },
  });

  if (!isCreated) return res.sendStatus(400);
  req.session.user = {
    id: user.id, name: user.name, email: user.email, phone: user.phone,
  };
  res.sendStatus(200);
});

router.post('/auth', async (req, res) => {
  const {
    name, email, password, phone,
  } = req.body;

  if (!name || !email || !password || !phone) return res.sendStatus(400);

  const user = await User.findOne({ where: { name, email, phone } });
  if (!user) return res.sendStatus(400);

  const isPassValid = compare(password, user.password);
  if (!isPassValid) return res.sendStatus(400);

  req.session.user = {
    id: user.id, name: user.name, email: user.email, phone: user.phone,
  };

  res.json(user);
});

router.get('/check', (req, res) => {
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
