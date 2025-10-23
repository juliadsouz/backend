// 1. importar o framework
const express = require("express");

// 1. importar middleware de terceiros
const cors = require("cors");

const router = require('./router');
//2. Criar uma instancia da aplicacão
const app = express();

//middleware embutido ou integrado
app.use(express.json());
//?param1=valor1&param2=valor2
app.use(express.urlencoded({extended: false})); 

// middleware de terceiros
app.use(cors());

//middleware de aplicação
app.use((req,res,next) => {
    console.log('Passei pelo middleware de app');
    next();
});

app.use('/tarefas',router);

//Criar um  middleware
app.get('/',(req, res) => {
        res.send("Olá")

});

//middleware de erro
app.use((err,req,res,next) => {
    res.status(500).send(err,mesage);
})

//3. Iniciar a aplicacão de uma porta
app.listen(3000, () => {
    console.log("App está on!")
});