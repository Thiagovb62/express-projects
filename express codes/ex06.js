const express1 = require('express')
const express2 = require('express')

console.log(express1== express2)

const server1 = express1()
const server2 = express1()

console.log(server1 == server2)

const r1 = express1.Router()
const r2 = express1.Router()

console.log(r1==r2)
