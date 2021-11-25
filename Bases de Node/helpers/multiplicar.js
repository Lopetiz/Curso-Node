
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false ) => {

    try {
        let salida = '';

        for( let i = 1; i <=10; i++ ) {
            salida += `${ colors.cyan ( base ) } ${ 'x'.red } ${ i } ${ '='.yellow } ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('====================='.rainbow);
            console.log('    Tabla del:', colors.cyan ( base ) );
            console.log('====================='.rainbow);

            console.log(salida);
        }
        
        fs.writeFileSync( `tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}