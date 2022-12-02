const express = require('express');

const middlewaresUpload = require('../middlewares/file');

const router = express.Router();

router.post('/upload', middlewaresUpload.single('avatar'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
