'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let binarioTexto = num.toString(10); 
  let digitosBinarios = Array.from(binarioTexto); //convierto la cadena en array
  let acumulador = 0;
  let exponente = 0;

  for (let i = digitosBinarios.length - 1; i >= 0; i--) {
    acumulador = (Math.pow(2, exponente) * digitosBinarios[i]) + acumulador; 
    exponente++;
  }    
  return acumulador;
}

function DecimalABinario(num) {
  // tu codigo aca
  
    let modulos = [];

    while(num > 0) {
        modulos.push(num % 2);
        num = parseInt(num / 2);
    } 

    return modulos.reverse().join('');    
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}