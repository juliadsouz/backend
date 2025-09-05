// 1. importar o framework
const express = require("express");

//2. Criar uma instancia da aplicacão
const app = express();

//Criar um  middleware
app.get('/',(req, res) => {
        res.send("Olá")
});

//3. Iniciar a aplicacão de uma porta
app.listen(3000, () => {
    console.log("App está on!")
});