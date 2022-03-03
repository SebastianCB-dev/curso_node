
const http = require('http');

http.createServer( (request, response) => {

    // console.log(request);

    // 404 No se encontró
    // 200 Todo exitoso

    // const persona = {
    //     id: 1,
    //     nombre: 'Sebastian'
    // };

    // response.writeHead(404, { 'Content-Type': 'text/plain'});
    response.setHeader('Content-Disposition', 'attachament; filename=lista.csv')
    response.writeHead(200, { 'Content-Type': 'application/csv' });
    response.write( 'id,nombre\n' );
    response.write( '1,Sebastian\n' );
    response.write( '2,Carrillo\n' );
    response.write( '3,Baron\n' );
    response.write( '4,Joan\n' );

    // response.write('Hello World');
    response.end();

})
.listen(8080);


