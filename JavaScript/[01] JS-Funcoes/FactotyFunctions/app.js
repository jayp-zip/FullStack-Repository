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
