require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const apidocsRouter = require('./routes/apidocsRouter');
const usuariosRouter = require('./routes/usuariosRouter.js');


const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`

mongoose
    .connect(url)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB", err.message));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', apidocsRouter);
app.use('/usuarios', usuariosRouter);

module.exports = app;
