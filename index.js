const express = require("express") 
const cors = require("cors")
const server = express()

server.use(express.json)

const users = [{
    username:"ade",
    password:12345
}]

server.get("/api/users", (req, res) => {
    res.status(200).json(users)
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: err.message})
})
module.exports = server