// Revisando os conceitos de array

/*
  Array são dados por referência, ou seja, no exemplo abaixo, mesmo alterando o array novo, tambèm mudou o array original pois ambos apontem para o mesmo lugar na memória
*/
const nomes = ["Tv de Tubo", "Tucano", "Gago"];
const novoArray = nomes;

novoArray.pop();

console.log("Array original \n" + nomes);
console.log("\nArray Novo  \n" + novoArray);
console.log("-------------------------------------😱");

/*
  No exemplo abaixo, copiamos o array original e criamos um novo array, logo, se alterarmos o novo array, não vai afetar o array original.
*/
const paises = ["Brazil", "Alemanha", "Russia"];
const novoArrayPaises = [...paises];

novoArrayPaises.pop();

console.log("Array original de paises \n" + paises);
console.log(
  "\nArray novo de paises \n" +
    novoArrayPaises +
    "\n\ntamanho do array é: " +
    novoArrayPaises.length
);

/* 
  A função pop(), remove um item do final do array ea shift() remove do começo, ambas retornan os itens removidos
*/
console.log("-------------------------------------😱");

const marcaDeCarro = ["Fiat", "Mercedez", "Ferrari"];
console.log(`Array original [ ${marcaDeCarro} ]`);
const removerDoComeco = marcaDeCarro.shift();
const removerDoFinal = marcaDeCarro.pop();
const carro = "Volvo";
const carroDois = "Uno";
const adicionandoNoFinal = marcaDeCarro.push(carro);
const adicionandoNoComeco = marcaDeCarro.unshift(carroDois);

console.log(`
item removido do começo ${removerDoComeco}
item removido do final ${removerDoFinal}
adicionando  ${carro} no final
adicionando  ${carroDois} no começo
Array: original ${marcaDeCarro}
`);
