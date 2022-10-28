/*
  Splice: Remove e adiciona de onde vc quiser
  ATENÇÃO: Essa funçao mexe no array original

  ao itilizar numeros negativos no splice, ele começa a contar deo final do 
  array, a conta se inicia no 1
*/
// Pegando valores especificos do array

 const nomes = [ 'Joao', 'Vitor']
 console.log(`Array origial:\n${nomes}\n`);
 
 nomes.splice(nomes.length, 0, 'Giovanni', 'Ana') 
 console.log(`Acrescentando nomes no final:\n${nomes}\n`);


 const novoNome = nomes.splice(2, 1)  
 console.log(`\n Pesquisando por indice [2,1], encontrado: ${novoNome}`);