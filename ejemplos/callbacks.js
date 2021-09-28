"use strict"

function suma(a, b, callback) {
  callback(a + b)
}

suma(2, 3, function (resultado) {
  // console.log(resultado)
})

const writeAfter2Secs = (text, callback) => {
  setTimeout(() => {
    console.log(text)
    callback()
  }, 2000)
}

writeAfter2Secs("Texto 1", () => {
  writeAfter2Secs('Texto 2', ()=>{
    console.log('Fin')
  })
})
