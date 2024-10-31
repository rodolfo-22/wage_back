const connectDB = require('../config/db');

exports.obtenerEmpleadoPorSalario = async (req, res) => {
  const salario = parseFloat(req.params.salario);
  console.log(salario);
  try {
    const db = await connectDB();
    const empleados = await db.collection('empleados').find({ SALARIO: salario }).toArray();
    empleados.length
      ? res.status(200).json(empleados)
      : res.status(404).json({ mensaje: 'No se encontraron empleados con ese salario' });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el salario' });
  }
};

exports.obtenerEmpleadosPorRangoSalario = async (req, res) => {
  const salarioMin = parseFloat(req.query.min);
  const salarioMax = parseFloat(req.query.max);
  try {
    if (!salarioMin || !salarioMax) {
      return res.status(400).json({ mensaje: 'Se requieren los parámetros min y max' });
    }
    const db = await connectDB();
    const empleados = await db.collection('empleados').find({ SALARIO: { $gte: salarioMin, $lte: salarioMax } }).toArray();
    empleados.length
      ? res.status(200).json(empleados)
      : res.status(404).json({ mensaje: 'No se encontraron empleados en ese rango' });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar empleados' });
  }
};

exports.obtenerEmpleadoPorNombre = async (req, res) => {
  const nombreEmpleado = req.params.nombre;
  console.log(nombreEmpleado);
  try {
    const db = await connectDB();
    const empleados = await db.collection('empleados').find({
      "NOMBRE EMPLEADO": { $regex: new RegExp(nombreEmpleado, 'i') }
    }).toArray();
    empleados.length
      ? res.status(200).json(empleados)
      : res.status(404).json({ mensaje: 'No se encontraron empleados con ese nombre' });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar empleados por nombre' });
  }
};

exports.obtenerEmpleadoPorDUI = async (req, res) => {
  const dui = parseInt(req.params.dui); // Convertir a número
  console.log("Valor de DUI recibido:", dui);

  try {
    const db = await connectDB();
    const empleado = await db.collection('empleados').findOne({ DUI: dui });
    empleado
      ? res.status(200).json(empleado)
      : res.status(404).json({ mensaje: 'No se encontró ningún empleado con ese DUI' });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el DUI del empleado' });
  }
};


