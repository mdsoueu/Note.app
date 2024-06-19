const express = require('express');
const tarefa = express.Router();
const Tarefas = require('../tabelas/tarefa'); // chamar o arquivo

// criando rotas
tarefa.get('/tarefa', async (req, res) => {
    const respostaModeloTarefa = await Tarefas.findAll();
    res.json(respostaModeloTarefa);
});

tarefa.post('/tarefa', (req, res) => {
    Tarefas.create({
        descricao: req.body.descricao
    })
        .then((novaTarefa) => {
            res.status(201).json(novaTarefa); // Return the newly created task object with its ID
        })
        .catch((erro) => {
            res.status(500).send(erro); // Handle any errors that occur during the creation process
        });
});

tarefa.delete('/tarefa/:id', (req, res) => {
    const idTarefa = req.params.id;
    Tarefas.destroy({
        where: { id: idTarefa }
    }).then(affectedRows => {
        if (affectedRows > 0) {
            res.json({ message: 'Excluído com sucesso.' });
        } else {
            res.status(404).json({ error: 'Tarefa não encontrado.' });
        }
    })
    .catch(error => {
        console.error('Erro ao excluir tarefa:', error);
        res.status(500).json({ error: 'Erro ao excluir tarefa.' });
    });
});

module.exports = tarefa;