[Voltar para sumário 📘](../README.md)

# Anotações de JavaSript

# Funções
## **CallBack** 
```javascript
/*
Callback: Callback são funções que são executadas quando uma "ação" ocorre e 
quando a fução finaliza, ela tambèm é executada.

No exemplo abaixo, fizemos quatros funções:

[rand] -> essa função serve para gerar um numero randomico de 1000 a 3000 para que possa ser passado no setTimeout
[funcaoUM] -> primeira função a ser executada
[funcaoDois] -> segunda função a ser executada, após [funcaoUm] ser executada e finalizada
[funcaoTres] -> terceira função a ser executad, após [funcaoDois] ser executada e finalizada

Obs: Para todas as funções serem excutadas, precisam que a funçao anterior seja executada, exeto a função [funcaoUM] pois é chama em primeiro lugar 

*/
function rand(min = 1000, max = 3000) {
  const numeroRand = Math.random() * (max - min) + min;
  return Math.floor(numeroRand);
}

// Primeira função a ser chamada
function funcaoUM(callback) {
  setTimeout(function () {
    console.log("primeira");
    if (callback) callback();
  }, rand());
}
// Segunda função a ser chamada
function funcaoDois(callback) {
  setTimeout(function () {
    console.log("segunda");
    if (callback) callback();
  }, rand());
}
// Terceira função a ser chamada
function funcaoTres(callback) {
  setTimeout(function () {
    console.log("terceira");
    if (callback) callback();
  }, rand());
}
// Callback Hell, O inferno de Callback, imagine 100 funções, uma dependendo da outra para ser chamada, esse efeito cascata fica muito extenso
funcaoUM(function () {
  funcaoDois(function () {
    funcaoTres(function () {
      console.log("Final");
    });
  });
});
```
## **Closures** 
```javascript
/*
Closures: É a habilidade de determinada função acessar seu escopo léxico.
No exemplo abaixo a função "anônima" tem acesso a 3 escopos, sendo eles
[Escopo Global],
[Escopo retornarFuncao] e
[Seu escopo atual]
*/

function retornaFucao() {
  const nome = "Julianna";
  return function () {
    return nome;
  };
}

const funcao = retornaFucao();
console.dir(funcao);
```
## **Factory Fanction** 
```javascript
/*
  Factory Fanction: Função Fabrica
  THIS: O this se refere ao escopo [ PAI ] em que foi criado, chamado ou declarado: this pode ser um window, alert, função, obj etc...
  Gatter: getter tranforma uma função em um atributo de objeto, como mostra o código abaixo 
  Obs: No código abaixo, this.sobrenome é a mesma coisa que [ pessoaUm.sobrenome ] 
*/

function criarPessoa(nome, sobrenome, altura, peso) {
  return{
    nome, 
    sobrenome,
    // Utilizando getter  
    get nomeCompleto(){
       return `${this.nome} ${this.sobrenome} }`
    },
    // Utilizando setter
    set nomeCompleto(valor){
      valor = valor.split(' ') 
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    }, 
    //Funções declaradas dentro de OBJ são chamadas de Métodos
    falando: function(assunto) {
      return `${nome} ${this.sobrenome} está ${assunto}`
    },
    altura,
    peso,
    get imc(){ 
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
}
const pessoaUm = criarPessoa('Felipe', 'Motta', 1.70, 80) 
const pessoaDois = criarPessoa('Joao', 'Vitor', 1.80, 60) 
const pessoaTres = criarPessoa('Ana', 'Carolina', 1.50, 180) 
// Ao invés de chamar [ pessoaUm.imc() ] utilizo [ pessoaUm.imc ]
console.log(pessoaUm.imc)   
console.log(pessoaDois.imc) 
console.log(pessoaTres.imc) 

```
## **Generating Fanction** 
```javascript
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
```
## **IEFF** 
```javascript

```
## **Recursive Function** 
```javascript

```

### Arrays

##### Array Review

##### Concatnate Array

##### Filter

##### Filter + Map + Reduce

##### Map

##### Reduce

##### Splice

### Objeto Prototypes

##### Getters e Setters

##### Heranca

##### Manipulando Prototypes

##### Metodos para Objeto

##### Objeto Map

##### Property e Properties

##### Prototypes

##### Revisando Objeto

##### Validando CPF
