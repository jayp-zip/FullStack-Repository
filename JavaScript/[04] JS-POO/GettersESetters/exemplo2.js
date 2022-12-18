class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }
  get nomeCompleto(){ return this.nome + ' ' +this.sobrenome }
  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' '); 
  }
}

const pessoa = new Pessoa('Joao', 'Vitor')
pessoa.nomeCompleto = 'Maria Fernanda Pereira'
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa.nomeCompleto);