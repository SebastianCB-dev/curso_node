const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use( express.static('public') );

// Ruta /hola-mundo
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo en su respectiva ruta')
});
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Sebastian Carrillo Barón',
    title: 'Curso de Node'
  });
})
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Sebastian Carrillo Barón',
    title: 'Curso de Node'
  })
})
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Sebastian Carrillo Barón',
    title: 'Curso de Node'
  })
})
// Cualquier otra ruta
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Desplegar servidor 
app.listen(PORT, () => {
  console.log(`The application is listening on ${PORT}`);
});