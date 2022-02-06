(() => {

    const empleados = [{
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

    const salarios = [{
            id: 1,
            salario: 3500
        },
        {
            id: 2,
            salario: 2000
        }
    ];

    const getEmpleadoByID = ( id ) => {

        return new Promise( (resolve, reject) => {
            const empleado = empleados.find( ( e ) => e.id === id )?.nombre;    

            ( empleado ) 
                ? resolve( empleado )
                : reject(`No existe el usuario con el id ${ id }`);

        });

    }

    const getSalarioByID = ( id ) => {
        return new Promise( (resolve, reject) => {

            const salario = salarios.find( ( s ) => s.id === id )?.salario;    
            ( salario )
                ? resolve( salario )
                : reject(`No existe el salario para la persona con el id ${ id }`);
        })
    }
    
    const id = 2;

    // getEmpleadoByID(id)
    //     .then( empleado => console.log( empleado ))
    //     .catch( ( err ) => console.log(err))
        
    //     getSalarioByID(id)
    //     .then( salario => console.log( salario ))
    //     .catch( ( err ) => console.log(err))

    // getEmpleadoByID( id )
    //     .then( empleado => {
    //         getSalarioByID( id )
    //             .then( salario => {

    //                 console.log('El empleado:', empleado, 'tiene un salario de:', salario);

    //             })
    //             .catch( err => console.log(err))
    //     })
    //     .catch( err => console.log(err))
    let nombre;
    getEmpleadoByID( id )
        .then( empleado => {
            nombre = empleado;
            return getSalarioByID( id );
        })
        .then( salario => console.log( 'El empleado:', nombre, 'tiene un salario:',salario ))
        .catch( console.log );
        
})()