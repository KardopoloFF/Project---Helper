const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const { Op } = require('sequelize');
const {
  Task, Category, User, Comment,
} = require('./db/models');

const uploadRouter = require('./routes/uploadRouter');
const userRouter = require('./routes/userRouter');

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
app.use('/user', userRouter);

function whereParser(reqbody) {
  const obj = {
    categoryId: {
      [Op.in]: [],
    },
  };
  if (reqbody?.frst) {
    obj.categoryId[Op.in].push(1);
  } if (reqbody?.scnd) {
    obj.categoryId[Op.in].push(2);
  } if (reqbody?.thrd) {
    obj.categoryId[Op.in].push(3);
  }
  if (reqbody?.four) {
    obj.categoryId[Op.in].push(4);
  }
  if (reqbody?.five) {
    obj.categoryId[Op.in].push(5);
  }

  return {
    where: obj,
  };
}

app.post('/posts', async (req, res) => {
  const result = await Task.findAll(whereParser(req.body.input));
  res.json(result.map((task) => {
    try {
      const newGeo = JSON.parse(task.geo);
      return { ...JSON.parse(JSON.stringify(task)), geo: newGeo };
    } catch (e) {
      return JSON.parse(JSON.stringify(task));
    }
  }));
});

app.patch('/posts', async (req, res) => {
  try {
    const { id } = req.body.input;
    await Task.update({
      status: 'На рассмотрении', worker: req.session.user.id,
    }, { where: { id } });
    const result = await Task.findOne({ where: { id } });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

app.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

app.get('/worker/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await User.findOne({
      where: { id },
      include:
      {
        model: Task,
        where: { worker: id },
      },
    });
    res.json(worker);
  } catch (e) {
    console.log(e);
  }
});

app.post('/newtask', async (req, res) => {
  try {
    const {
      title, text, price, date, categoryId, author, geo,
    } = req.body;
    await Task.create({
      title, text, date, price, geo: JSON.stringify(geo), worker: null, author, categoryId, status: 'Ждет исполнителя',
    });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

app.get('/profile/tasks', async (req, res) => {
  try {
    const { id } = req.session.user;
    const myTasks = await Task.findAll({ where: { author: id } });
    res.json(myTasks);
  } catch (e) {
    console.log(e);
  }
});

app.patch('/profile/tasks', async (req, res) => {
  try {
    const id = req.body.input;
    await Task.update({
      status: 'В работе',
    }, { where: { id } });
    const result = await Task.findAll({ where: { author: req.session.user.id } });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

app.patch('/profile/tasksdone', async (req, res) => {
  try {
    const id = req.body.input;
    await Task.update({
      status: 'Выполнено',
    }, { where: { id } });
    const result = await Task.findAll({ where: { author: req.session.user.id } });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

app.post('/task/worker/newcomment', async (req, res) => {
  try {
    await Comment.create(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});
app.get('/task/worker/allcomments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allComments = await Comment.findAll({
      where: { addresat: id },
      order: [['id', 'DESC']],
    });
    res.json(allComments);
  } catch (e) {
    console.error(e);
  }
});

app.get('/comment/name/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const curAuthor = await User.findOne({
      where: { id },
    });
    res.json(curAuthor);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
