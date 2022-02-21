const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Choose an option: ',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Search City`
            },
            {
                value: 2,
                name: `${ '2.'.green } History`
            },
            {
                value: 0,
                name: `${ '0.'.green } Exit`
            },
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();

    console.log('=============================='.green);
    console.log('    Choose an option'.white);
    console.log('==============================\n'.green);

    const { opcion } = await inquirer.prompt( questions );


    return opcion;
}

const pausa = async() => {

    console.log('\n');

    await inquirer.prompt([
        {
            type: 'input',
            name: 'pausa',
            message: `Press ${ 'ENTER'.green } to continue`
        }
    ])

    return; 

}

const leerInput = async( msg ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: msg,
            validate( value ) {
                if( value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;

}

const listarLugares = async( lugares = [] ) => {
    const choices = lugares.map( (lugar,i) => {

        const idx = `${ i + 1 }.`.green;
        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.name }`
        }

    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Choice a place',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
    // {
    //     value: tarea.id,
    //     name: `${ '1.'.green } Crear tarea`
    // },

};

const confirmar = async ( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt( question );

    return ok;

}

const mostrarListadoChecklist = async( tareas = [] ) => {
    const choices = tareas.map( (tarea,i) => {

        const idx = `${ i + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.isCompleted ) ? true : false
        }

    });
    
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
    // {
    //     value: tarea.id,
    //     name: `${ '1.'.green } Crear tarea`
    // },

};


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}
