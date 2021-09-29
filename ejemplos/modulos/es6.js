// Para poder utilizarlo debe inicializarse un proyecto de node y 
// se tiene que añadir el "type: module" al package.json

// Import nombrado
// Debe llamarse igual que la propiedad que se exporta
import {suma} from './es6Module.js'

console.log(suma(2,3))


// Import default. Puede recibir cualquier nombre que queramos.
import nepe from './es6Module.js'

console.log(nepe)