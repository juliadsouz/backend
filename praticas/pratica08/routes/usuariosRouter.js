const express = require('express');
const authMiddleware= require("../middleware/authMiddleware.js");
const gerarToken = require("../middleware/authMiddleware.js");
const { token } = require('morgan');
const router = express.Router();

router.post('/login', (req, res) => {
  const email = req.body;
  const token = authMiddleware.gerarToken(email);
  res.status(200).json({token}); 
}
);

router.post('/renovar', authMiddleware.verificarToken, (req, res) => {
  const novotoken = authMiddleware.gerarToken(req.usuario.email)
  res.status(200).json(novotoken)
}) 

module.exports = router;
