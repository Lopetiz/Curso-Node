const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opción',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('==========================='.rainbow);
    console.log('   Seleccione una opción   ');
    console.log('===========================\n'.rainbow);

    const opt = await inquirer.prompt (preguntas);

    return opt;

}

module.exports = {
    inquirerMenu
}