"use strict"

const express = require("express")
const http = require("http")

const app = express()

// Definición de ruta donde express va a escuchar
app.get("/", (req, res, next) => {
  console.log(`Me peticionaron desde ${req.originalUrl}`)
  res.send(`Choy un Express server`)
})

app.get('/saluda', (req, res, next) => {
  console.log(`Me peticionaron desde ${req.originalUrl}`)
  res.send(`Holiwi querido usador`)
})

// Creación del servidor
const server = http.Server(app)

// Arrancar el servidor
const PORT = 8085

server.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})
