const express = require('express');
const path = require('path');
const { User } = require('../db/models');

const middlewaresUpload = require('../middlewares/file');

const router = express.Router();

router.post('/upload', middlewaresUpload.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      const newImg = await User.create({ img: req?.file.path });
      res.json(newImg);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
