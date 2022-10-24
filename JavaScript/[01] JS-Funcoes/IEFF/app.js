/*
  IIEF -> Immediately invoke function expression
  Funções auto invocadas ou Funções imediatas
 */

// essa função não enxerga o escopo global
(function() {
  const nome = 'JoaozinhoDev, está no escopo fechado'
  console.log(nome);
})()

// escopo global
const nome = 'Felipe, está no escopo global'
console.log(nome);
