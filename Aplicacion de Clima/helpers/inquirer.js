const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.yellow } Buscar ciudad`
            },
            {
                value: 2,
                name: `${ '2.'.yellow } Historial`
            },
            {
                value: 0,
                name: `${ '0.'.yellow } Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('==========================='.rainbow);
    console.log('   Seleccione una opción   ');
    console.log('===========================\n'.rainbow);

    const { opcion } = await inquirer.prompt (preguntas);

    return opcion;

}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.magenta } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate ( value ) {
                if( value.length === 0 ) {
                    return 'Por favor, ingresa un valor';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc;
}

const listarLugares = async( lugares = [] ) => {

    const choices = lugares.map( (lugar, i) => {

        const idx = `${i + 1}.`.yellow;

        return {
            value: lugar.id,
            name:  `${ idx } ${ lugar.nombre }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.yellow + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares
}