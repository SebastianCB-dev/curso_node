
// setTimeout( () => {
//     console.log("Hola Mundo");
// }, 1000);

const getUsuarioByID= ( id, callback ) => {

    const user = {
        id,
        nombre: 'Sebastian'
    }

    setTimeout( () => {
        callback(user);
    }, 1500);
}

getUsuarioByID( 10, ({ id, nombre }) => {
    console.log( id );
    console.log( nombre.toUpperCase() );
} );