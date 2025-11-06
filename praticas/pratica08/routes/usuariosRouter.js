const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/login', (req, res) => {
  const token = authMiddleware.gerarToken({ email: req.body.usuario });
  res.status(200).json({ token });
});

router.post('/renovar', authMiddleware.verificarToken, (req, res) => {
  const token = authMiddleware.gerarToken({email: req.usuario.email});
  res.status(200).json({ token });
});

module.exports = router;
