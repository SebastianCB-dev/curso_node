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

const getEmpleadoByID = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id) ?.nombre;

        (empleado) 
            ? resolve(empleado)
            : reject(`No existe el usuario con el id ${ id }`);

    });

}

const getSalarioByID = (id) => {
    return new Promise((resolve, reject) => {

        const salario = salarios.find((s) => s.id === id) ?.salario;
        (salario) 
            ? resolve(salario)
            : reject(`No existe el salario para la persona con el id ${ id }`);
    })
}

const id = 3;


const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleadoByID(id);
        const salario = await getSalarioByID(id);
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
    } catch( err ) {
        throw err;
    }
   
}


getInfoUsuario( id )
    .then( console.log )
    .catch( console.log );