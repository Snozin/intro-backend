'use strict'

console.log('empiezo')

function escribe2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto)

    callback()
  }, 2000)
}

escribe2Segundos('texto 1', ()=>{
  escribe2Segundos('texto 2', ()=> console.log('Fin de verdad'))
})


// console.log('termino')