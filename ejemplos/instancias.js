'use strict'

// Crear objetos con una función

// function Fruta () {
//   this.nombre = 'Limon'

//   // Definir método
//   this.saludar = ()=> {
//     console.log('Yieeh, soy un', this.nombre)
//   }
// }

// Crear un objeto con el constructor
// const limon = new Fruta()

// console.log(limon)

// limon.saludar()

/**
 * La anterior es la forma antigua de crear clases en Js, actualmente se usa el
 * palabro reservado Class con su constructor.
 */
 class Fruta {
  constructor(name = "Kiwi") {
    this.name = name
  }

  saludar() {
    console.log(`Hola, soy ${this.name}`)
  }
}

const limon = new Fruta('Limon')
limon.saludar()