const express = require('express')

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // Directorio público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor ejecutandose en el puerto', this.port);
        });
    }

}

module.exports = Servidor;