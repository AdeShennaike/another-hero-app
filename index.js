// require('dotenv').config()
// const server = require('./server.js')

// const port = process.env.PORT || 9000

// server.listen(port, () => {
//     console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
// })

require('dotenv').config()
const express = require("express") 
const cors = require("cors")

const server = express()

server.use(express.json)
server.use(cors())

const port = process.env.PORT || 9000

// const users = [{
//     username:"ade",
//     password:12345
// }]

server.get("/api/hello", (req, res) => {
    res.json({message: 'api is  working'})
})

server.use('*', (req, res) => {
    res.send(' <h1>Hello, there!</h1>')
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack})
})

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})
// module.exports = server