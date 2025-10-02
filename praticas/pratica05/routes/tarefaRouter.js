
const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.get('/', controller.listar);
router.get('/:tarefaId', controller.buscarPeloId);
router.post('/', controller.criar);
router.put('/:tarefaId', controller.atualizar);
router.delete('/:tarefaId', controller.remover);

module.exports = router;
