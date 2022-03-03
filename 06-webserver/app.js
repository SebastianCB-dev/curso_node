const express = require('express');
const app = express();
const PORT = 8080;

// Servir contenido estático

app.use( express.static('public') );

app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
  console.log(`The application is listening on ${PORT}`);
});