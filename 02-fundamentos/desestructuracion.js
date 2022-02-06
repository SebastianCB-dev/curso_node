
const batman = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    poder: 'Multimillonario',
    // edad: 50,
    getNombre() { 
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};


const nombre   = batman.nombre;
const apellido = batman.apellido;
const poder    = batman.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    
    console.log( nombre, apellido, poder, edad );

}

imprimeHeroe(batman);

const heroes = ['Batman', 'Superman', 'Luther King'];

const heroe1 = heroes[0];
const heroe2 = heroes[1];
const heroe3 = heroes[2];

const [ , , h3] = heroes;

console.log( h3 );

