/*
Funcão Geradora: São funções que espera um determinado tempo para chamar determinada tarefas

yield: Funciona quase iguala a um retun mas, ele retorna a 
função e quando a função é chamada novamente, volta de onde parou

ATENÇÃO: CASO TENHA UM RETURN DENTRO DE UMA FUNÇÃO GERADORA, A FUNCÃO QUEBRA E É ENCERADA
*/

// Exemplo um
function* geradora() {
console.log("\nFunção geradorta simples ");
  //Código qualquer
  yield "Valor um";
  //Código qualquer
  yield "Valor dois";
  //Código qualquer
    yield "Valor tres";
}
const geradoraUm = geradora()
for(let valor of geradoraUm){
  console.log(valor); 
}

// Exemplo dois, essa é uma função geradora infinita
function* geradoraInfinita() {
  let i = 0;
  while (true) {
    yield i
    i++
  }
}
const geradoraDois = geradoraInfinita()
console.log("\nFunção geradorta infinita ");
console.log(geradoraDois.next().value); // 0
console.log(geradoraDois.next().value); // 1
console.log(geradoraDois.next().value); // 2
console.log(geradoraDois.next().value); // 3
console.log(geradoraDois.next().value); // 4
console.log(geradoraDois.next().value); // 5

// Exemplo Tres, Geradora que delega tarefass para outras geradoras
function* geradoraTarefa() {
  yield "Tarefa" + 1
  yield "Tarefa" + 2
  yield "Tarefa" + 3
}
function* tarefaUm(){
  yield* geradoraTarefa()
  yield "Tarefa" + 4
  yield "Tarefa" + 5
  yield "Tarefa" + 6
}
console.log("\nFunção geradora que delega tarefas a outras funções geradoras");
const mostraTarefas = tarefaUm()
for(let tarefa of mostraTarefas){
  console.log(tarefa);
}

// Exemplo Tres, Geradora que delega tarefass para outras geradoras
function* geradoraComFuncoesDentro() {
  yield function (){
    console.log("Função Um");
  }
  yield function (){
    console.log("Função dois");
  }
  yield function (){
    console.log("Função Tres");
  }
}
console.log("\nFunção geradora que possui funções dentro dela");
const recebeGeradoraComFuncoesDentro = geradoraComFuncoesDentro()
const funcaoUm = recebeGeradoraComFuncoesDentro.next().value
const funcaoDois = recebeGeradoraComFuncoesDentro.next().value
funcaoUm()
funcaoDois()