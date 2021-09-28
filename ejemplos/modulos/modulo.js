// module.exports = {
//   suma: (a, b) => a + b,
// }

// Esto es un alias para hacer lo mismo que arriba
exports.suma = (a, b) => a + b
exports.resta = (a,b) => a - b

/**
 * Importante!
 * Una vez que se usa el module.exports no se puede combinar usando el 
 * alias exports.XXX porque deja de funcionar dicho alias.
 * usar siempre la misma sintaxis, sea cual queramos escoger, pero siempre
 * la misma.
 */

// Esta forma es errónea porque se elimina el alias a module.exports
// exports = {cosasNazis}