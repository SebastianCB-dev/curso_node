require('colors');
const {
    guardarDB,
    leerDB
} = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    let tareasDB;

    try { 
        tareasDB = leerDB();
    }catch( err ) {

    } 
    
    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Imprimir menu 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                guardarDB(tareas.listadoArr);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarTareasPendientes();
                break;
            case '4':
                tareas.listarTareasPendientes(false);
                break;
            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
                
                break;
        }

        await pausa();

    } while (opt !== '0');

}

main();