require('dotenv').config();
const Servidor = require('./models/server');


const server = new Servidor();

server.listen();