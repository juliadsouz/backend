const express = require('express');
const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get('/produtos', authMiddleware.verificarToken, (req, res) =>
{
    res.json([])
});

module.exports = router;