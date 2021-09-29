const express = require('express')
const server = express()

server.route('/clientes')
  .get((req,resp) => resp.send('Lista de Clientes'))
  .post((req,resp) => resp.send('Novo Cliente'))// criando um novo objeto
  .put((req,resp) => resp.send('Alterar Cliente'))//alterando um objeto
  .delete((req,resp) => resp.send('Remover Cliente'))//excluir um objeto da base
server.listen(3000,() => console.log('executando...'))
