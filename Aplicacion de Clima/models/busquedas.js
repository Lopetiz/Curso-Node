const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'Huelva', 'Badajoz'];

    constructor() {
        // Leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoibG9wZXRpeiIsImEiOiJja3dvMjc4bnYxaXNjMm9wZDFjdXRqMWUwIn0.4n6ThnzdHfWBVwwI0raqaw',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad( lugar = '' ) {
        
        try {
            // Petición HTTP
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await intance.get();
            
            console.log(resp.data);

            return [];

        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;