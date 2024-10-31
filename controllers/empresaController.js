const connectDB = require('../config/db');

exports.obtenerEmpresaPorNombre = async (req, res) => {
  const nombre = req.params.nombre;
  try {
    const db = await connectDB();
    const empresas = await db.collection('empleados').find({
      NOMBRE: { $regex: new RegExp(nombre, 'i') }
    }).toArray();
    empresas.length
      ? res.status(200).json(empresas)
      : res.status(404).json({ mensaje: 'No se encontraron empresas con ese nombre' });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el nombre de la empresa' });
  }
};
