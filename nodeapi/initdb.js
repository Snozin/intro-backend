'use strict'

// conexión a la bd
// require('./lib/connectMongoose')

// modelo de agentes

const Agente =  require ('./models/Agente')


main().catch(err => console.log('Error al crear la BD de prueba')) 


async function main() {
  await initAgentes()
}

async function initAgentes() {
  // Borrar todos los documentos de la colección de Agentes
  const deleteAll = await Agente.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} agentes`)
  // Crear agentes iniciales
  const agentes = await Agente.insertMany(agentData.agentes)
  console.log(`Creados ${agentes.length} agentes`)
}

