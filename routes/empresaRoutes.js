const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.get('/:nombre', empresaController.obtenerEmpresaPorNombre);

module.exports = router;
