const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Define el maximo de numeros a generar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw '¡La base tiene que ser un numero!'.red;
        if( isNaN(argv.h) || argv.h <= 0 ) throw 'La bandera "hasta" ó "-h" debe ser un numero positivo!'.red
        return true;
    })
    .argv;

module.exports = argv;