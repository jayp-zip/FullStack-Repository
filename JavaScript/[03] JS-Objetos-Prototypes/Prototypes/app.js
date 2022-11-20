/*
javascript  é baseado em protótipos para passar propriedades e métodos de um objeto  para o outro.

Protótipo é o termo usado para se referir ao que foi criado pela primeira vez , servindo de modelo ou molde 
para futura produções.

Todos os objetos tem uma refêrencia interna para um protótipo (__proto__) 
que vem da propriedade prototype da função construtora que foi usado para criá-lo. Quando 
tentamos acesar o menbro de um objeto, primeiro o motor do JS vai tentar encotrar este memobro no próprio objeto   
e depois a cadeia de prrótotipos é usada paraaté o topo (null) até encontrar (ou não) tal membro.
*/



// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function (){
  return this.nome + "" + this.sobrenome;
}

// Instanciando 
const pessoa1 = new Pessoa('João ','Vitor')  
const pessoa2 = new Pessoa('Vitor ','Vitor')  

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
