/*
  Filter: O nome fala por sí só
  ATENÇÃO: Filter sempra vai retornar um array, com a mesma quantidade de elementos oum menos.
*/
// Retornar os numeros maiores 10
const numeros = [5, 50, 80, 1, -90, 27, 11, 78, 15, 2, 56, 43, 125];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

/*  
  Retornar pessoas que tenha o nome com mais de 5 letras
  Retornar pessoas que tenha a idade acima de 50 anos
  Retornar pessoas que cujo o nome ternima com a
*/

const pessoas = [
  { nome: "Julianna", idade: 45 },
  { nome: "Ramon", idade: 67 },
  { nome: "Joao", idade: 18 },
  { nome: "Luiz", idade: 20 },
  { nome: "Vini", idade: 51 },
  { nome: "Ana", idade: 29 },
];
const quantidadeDeCaracteresNoNomeDasPessoas = pessoas.filter(
  (obj) => obj.nome.length > 5
);
const contarIdadePessoas = pessoas.filter((obj) => obj.idade > 50);
const filtrarPorUltimaLetraDoNome = pessoas.filter((obj) =>
  obj.nome.toLocaleLowerCase().endsWith("a")
);
