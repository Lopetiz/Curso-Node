require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
     } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) { // Cargar tareas
        tareas.cargarTareasFromArray ( tareasDB );
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1': // Crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;

            case '2': // Listar tareas
                tareas.listadoCompleto();
            break;

            case '3': // Listar tareas completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4': // Listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '5': // Completar tarea(s)
                const ids = await mostrarListadoChecklist ( tareas.listadoArr );
                console.log(ids);
            break;

            case '6': // Borrar tarea
                const id = await listadoTareasBorrar ( tareas.listadoArr );
                const ok = await confirmar('¿Estás seguro?')
                if ( ok ) {
                    tareas.borrarTarea( id );
                    console.log('Tarea borrada')
                }
            break;
        }

        guardarDB( tareas.listadoArr );

        await pausa ();
    
    } while ( opt !== '0' );
    
}

main();