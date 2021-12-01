const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'Huelva', 'Badajoz'];

    constructor() {
        // Leer DB si existe
    }

    async ciudad( lugar = '' ) {
        
        try {
            // Petición HTTP
            // console.log('ciudad', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data);

            return [];

        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;