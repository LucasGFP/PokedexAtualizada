// app.js
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const PORT = 3000;

// Configurando o EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear o corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usando as rotas
app.use('/', routes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
