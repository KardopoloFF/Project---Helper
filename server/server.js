const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
// const router = require('./routes/uploadRouter');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const { Task } = require('./db/models');

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

app.get('/posts', async (req, res) => {
  const result = await Task.findAll();
  res.json(result);
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
