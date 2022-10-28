/*
  Reduce: É bastante utilizada para reduzir um array
*/
//  Some todos os números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 1];
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
});
// console.log(total);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Julianna", idade: 15 },
  { nome: "Ramon", idade: 67 },
  { nome: "Joao", idade: 18 },
  { nome: "Luiz", idade: 20 },
  { nome: "Vini", idade: 51 },
  { nome: "Ana", idade: 29 },
  { nome: "1berto", idade: 120 },
];

const pessoaComMaiorIdades = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
}); // Iniciar o acumulaor como "0"

console.log(pessoaComMaiorIdades);
