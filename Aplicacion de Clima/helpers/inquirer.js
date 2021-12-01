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
            message: `Presione ${ 'enter'.cyan } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa,
}