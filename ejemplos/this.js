'use strict'

 class Fruta {
  constructor(name = "Kiwi") {
    this.name = name
  }

  saludar() {
    console.log(`Hola, soy ${this.name}`)
  }
}

const limon = new Fruta('Limon')

// Bind es un método de las funciones que permite poder pasarle la función
// "propia" para así poder conservar el this dentro de la nueva función
// que vaya ejecutar la que se pasa por parámetros
setTimeout(limon.saludar.bind(limon) , 2000)
// limon.saludar()