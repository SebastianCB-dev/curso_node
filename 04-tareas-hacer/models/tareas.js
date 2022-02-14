const Tarea = require("./tarea");
const colors = require('colors');

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;

    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ) {
        
        if( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => this._listado[tarea.id] = tarea);

    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }

    listadoCompleto() {

        const taskArr = this.listadoArr;

        console.log();

        taskArr.forEach((tarea, index) => {
            let status = '';
            (tarea['isCompleted']) ?
            status = 'Completada'.green: status = 'Pendiente'.red;

            console.log(`${ colors.green((index + 1) + '.') } ${ tarea['desc'] } :: ${ status }`);
        });

    }

    listarTareasPendientes(completadas = true) {
       
        const arr = this.listadoArr.filter((task) => {
            if(completadas && task['isCompleted'] || !completadas && !task['isCompleted']) return task;
        });
        
        console.log();

        arr.forEach((tarea, index) => {
            let status = '';
            (tarea['isCompleted']) 
                ? status = tarea['isCompleted'].green 
                : status = 'Pendiente'.red;
            console.log(`${ colors.green((index + 1) + '.') } ${ tarea['desc'] } :: ${ status }`);
        });

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if( !tarea['isCompleted'] ) {
                tarea['isCompleted'] = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ) {
              this._listado[tarea.id].isCompleted = null;
            }

        });

    }

}

module.exports = Tareas;