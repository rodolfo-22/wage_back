const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/salario/:salario', empleadoController.obtenerEmpleadoPorSalario);
router.get('/salario', empleadoController.obtenerEmpleadosPorRangoSalario);
router.get('/:nombre', empleadoController.obtenerEmpleadoPorNombre);
router.get('/dui/:dui', empleadoController.obtenerEmpleadoPorDUI);

module.exports = router;
