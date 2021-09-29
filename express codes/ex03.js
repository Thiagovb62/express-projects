const express = require('express')
const server = express()

server.get(function(req,resp,next){//midleware 1
  //get diz exatamente o endereco, ja o use mapeia todos metodos http e defineo prefixo
  console.log('inicio...')
  next()
  console.log('fim...')
})
server.use(function(req,resp){//midleware 2
  console.log('resposya...')
  resp.send('<h2><i>Ola express!<i><h2>')

})
server.listen(3000,() => console.log('executando...'))
