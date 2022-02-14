const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    isCompleted = null;

    constructor( desc ) {
        this.desc = desc;
        this.id = uuidv4();
        this.isCompleted = null;
    }

}

module.exports = Tarea;