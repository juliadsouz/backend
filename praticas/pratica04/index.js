const express = require('express');
const app = express();
const tarefasRouter = require('./routes/tarefas'); 

app.use(express.json());

app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});

app.use('/tarefas', tarefasRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ erro: err.message });
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});
