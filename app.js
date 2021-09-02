const express= require('express');
const app= express();

const rutaHome= require('./routers/main.js');

app.use (express.static('public'));

app.listen(3000, ()=>{console.log('Servidor funcionando')});
app.use('/', rutaHome);
