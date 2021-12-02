const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'id, nombre\n' );
    res.write( '1, Jose Manuel\n' );
    res.write( '2, Noelia\n' );
    res.write( '3, Abel\n' );
    res.write( '4, Laura\n' );
    res.end();

} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080);