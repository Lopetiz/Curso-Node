
const { crearArchivo } = require('./multiplicar');

console.clear();

const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');

// const base = 5;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch ( err => console.log(err) );