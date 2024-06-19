const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const tarefaRoutes = require('./controlador/controladorTarefa');
const usuarioRoutes = require('./controlador/controladorUsuario');

app.use(tarefaRoutes); // Define prefixo '/tarefa' para as rotas de tarefa
app.use(usuarioRoutes); // Define prefixo '/usuario' para as rotas de usuário

app.listen(4300, () => {
    console.log('Conectou.');
});
