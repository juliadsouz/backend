const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json("API está on");
});

module.exports = router;
