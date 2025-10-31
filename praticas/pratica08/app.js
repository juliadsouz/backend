require('dotenv').config();

const express = require('express');
const logger = require('morgan');


const produtosRouter = require('./routes/produtosRouter.js');
const usuariosRouter = require('./routes/usuariosRouter.js');

const app = express();

app.use('/produtos', produtosRouter);
app.use('/usuarios', usuariosRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


module.exports = app;
