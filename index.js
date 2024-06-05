/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const express = require('express');
var cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
app.use(express.static('public'));

// Lectura y parseo de body
app.use(express.json());

// Rutas
// auth: crear, login, renew
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar peticiones
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});