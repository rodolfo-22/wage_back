require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const empleadoRoutes = require('./routes/empleadoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');

//para permitir peticiones desde cualquier origen
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/empleados', empleadoRoutes);
app.use('/empresa', empresaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
