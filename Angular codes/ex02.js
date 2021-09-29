const express = require('express')
const server = express()

server.get('/',function(req,resp,next){//midleware 1
  console.log('inicio...')
  next()
  console.log('fim...')
})
server.get('/',function(req,resp){//midleware 2
  console.log('resposya...')
  resp.send('<h2><i>Ola express!<i><h2>')
})
server.listen(3000,() => console.log('executando...'))
