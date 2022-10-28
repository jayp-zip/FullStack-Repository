/*
 Map: Permite que seja feita alterações no array principal, caso voce queira criar e modicifar outro array sem ser o array 
 original, deve-se estanciar o array dentro da função 
*/

// Dobrar os numeros drntro do arary
const numeros = [5, 50, 80, 1, -90, 27, 11, 78, 15, 2, 56, 43, 125];
const dobrarNuemros = numeros.map((valor) => valor * 2);
// console.log(dobrarNuemros);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada pbjeto

const pessoas = [
  { nome: "Julianna", idade: 45 },
  { nome: "Ramon", idade: 67 },
  { nome: "Joao", idade: 18 },
  { nome: "Luiz", idade: 20 },
  { nome: "Vini", idade: 51 },
  { nome: "Ana", idade: 29 },
];
const nome = pessoas.map((obj) => obj.nome);
// console.log(nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
// console.log(idades);
const addId = pessoas.map(function (obj, indice) {
  obj.id = indice;
  return obj;
});
// console.log(addId);
