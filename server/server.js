const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
// const router = require('./routes/uploadRouter');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const { where, Op } = require('sequelize');
const { Task, Category } = require('./db/models');

const uploadRouter = require('./routes/uploadRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', uploadRouter);

// функция обработки чекбокса фильтрации задач. Комменты удалю как работоспособность будет полной
function whereParser(reqbody) {
  const obj = {};
  if (reqbody.frst) {
    obj.name[Op.or].push('courier');
    // = {
    //   [Op.or]: [...obj.description[Op.or], 'courier'],
    // };
  } if (reqbody.scnd) {
    obj.name[Op.or].push('moika');
    // = {
    //   [Op.substr]: 'Москва',
    // };
  }
  return { where: obj };
}

app.get('/posts', async (req, res) => {
  const result = await Task.findAll(whereParser(req.body));
  res.json(result);
});

app.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

app.post('/newtask', async (req, res) => {
  const {
    title, text, price, date, categoryId,
  } = req.body;
  const newTask = await Task.create({
    title, text, date, price, geo: 'Moscow', worker: null, author: 1, categoryId, status: false,
  }); //  надо перепроверить
  res.status(200);
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
