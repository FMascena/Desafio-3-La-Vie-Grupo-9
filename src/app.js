const express = require('express');
const { hasConnection } = require('./database/index');
const handleError = require ("./middlewares/handleError");
const routes = require('./routes/index');

const app = express();

app.use(express.json());

try {
  hasConnection();
} catch (error) {
  console.error('Erro de conexão com o banco de dados:', error);
}

app.use(routes);
app.use(handleError);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});