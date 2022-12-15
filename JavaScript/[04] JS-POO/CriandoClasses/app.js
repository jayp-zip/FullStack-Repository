/*
 Classe é a mesma coisa de uma função construtora, e fazem exatamente as mesmas coisas
*/
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){
    console.log(`${this.nome} ${this.sobrenome} está falando.`);
  }
}

const p1 = new Pessoa("Joao", "Vitor");
console.log(p1.falar());
