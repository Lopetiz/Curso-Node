
const empleados = [
    {
        id: 1,
        nombre: 'José Manuel'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salario = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id )

    if ( empleado ) {
        callback (null, empleado);
    } else {
        callback (`Empleado con id ${ id } no existe`);
    }

    return empleado;

}

// console.log( getEmpleado ( 3 ) );

getEmpleado ( 10, ( err, empleado) => {

    if ( err ) {
        console.log('ERROR!')
        return console.log(err);
    }

    console.log('Empleado existe!');
    console.log( empleado );

} )
