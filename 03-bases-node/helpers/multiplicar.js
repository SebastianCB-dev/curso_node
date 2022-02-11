const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, limite = 10) => {

    try {
        if( listar ) {
            console.log("======================".green);
            console.log('    Tabla del:'.green, colors.cyan(base) );
            console.log("======================".green);
        }
       

        let salida = '', consola = '';


        for (let i = 1; i <= limite; i++) {
            salida += `${ base } x ${ i } = ${ (base * i) }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ (base * i) }\n`;
        }
        if( listar ) console.log(consola);

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return (`tabla-${ base }.txt`);
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
};