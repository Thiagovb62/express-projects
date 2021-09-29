const express = require('express')
const server = express()

server.get('/',function(req,resp){
  resp.send('<h1>Index!<h1>')
})
server.all ('/teste',function(req,resp){
  resp.send('<h1>Teste!<h1>')
})
server.get(/api/,function(req,resp){
  resp.send('<h1>API!<h1>')
})
server.listen(3000,() => console.log('executando...'))
