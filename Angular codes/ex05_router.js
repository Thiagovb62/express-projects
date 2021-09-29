const express = require('express')
const router = express.Router()

router.use((req,resp,next) => {
  const init = Date.now()
  next()
  console.log(`tempo = ${Date.now() - init}ms.`)
})
router.get('/produtos/:id', (req,resp) =>{
  resp.json({id: req.params.id, name : 'Caneta'})
})
router.get('/clientes/:id/:name',(req,resp)=> {
   resp.json({id: req.params.id, name:req.params.name})
})
module.exports = router
