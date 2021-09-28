"use strict"

const EventEmitter = require("events")

// Crear un emisor de eventos
const emisor = new EventEmitter()

emisor.once("Llamada de tfno", (param) => {
  console.log("Brr Brr", `es ${param}`)
})

emisor.on("Llamada de tfno", (param) => {
  console.log("Suena el teléfono")
})

emisor.emit("Llamada de tfno", 'Paco')
// emisor.emit("Llamada de tfno")
// emisor.emit("Llamada de tfno")
