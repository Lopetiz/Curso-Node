require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';

    do {

        // opt = await inquirerMenu();
        // console.log({ opt });

        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');

        tareas._listado [tarea.id] = tarea;

        console.log(tareas);

        await pausa ();
    
    } while ( opt !== '0' );
    
}

main();