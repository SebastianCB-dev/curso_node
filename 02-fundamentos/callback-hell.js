
const empleados = [
    {
        id: 1,
        nombre: "Sebastian"
    },
    {
        id: 2,
        nombre: "Mauricio"
    },
    {
        id: 3,
        nombre: "Jairin"
    }
];

const salarios = [
    {
        id: 1,
        salario: 3500
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleadoByID = ( id, callback ) => {

    const empleado = empleados.find( ( e ) => e.id === id )?.nombre;

    if( empleado ) callback( null, empleado );
    else callback(`Empleado con id: ${ id } no existe!`);

}

const id = 3; 

const getSalarioByID = ( id, callback) => {

    const salario = salarios.find( ( s ) => s.id === id )?.salario;

    if(salario) callback(null, salario);
    else callback(`Salario para la persona con id: ${ id } no existe!`) 
}


 getEmpleadoByID( 1, ( err, empleado ) => {

    if( err ) return console.log( "Error!! \n" + err );


    console.log("Empleado existe!!!");
    console.log(empleado);

 }) ;

 getSalarioByID( id, (err, salario) => {
    if(err) return console.log(err);
    else return console.log('Salario: ' + salario)
 } );




