// Cargar la librería http
const http = require("http")
const Chance = require('chance')

const chance = new Chance()


// Definir servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" })
  res.end(`Wake up, <b>${chance.name()}</b> ...`)
})

// Arrancar el servidor
server.listen(8080, "127.0.0.1") //0.0.0.0 sería para aceptar peticiones de todas las ip

console.log("Server running on port http://127.0.0.1:8080")
