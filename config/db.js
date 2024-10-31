const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
let db;

const connectDB = async () => {
  if (!db) {
    const client = await MongoClient.connect(uri);
    db = client.db('sueldos');
    console.log('Conectado a la base de datos MongoDB');
  }
  return db;
};

module.exports = connectDB;
