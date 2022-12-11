const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  }
}
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}
const pessoaPrototype = { ...falar, ...beber };

function criarPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const umaPessoa = criarPessoa('João', 'Vitor')
console.log(umaPessoa); 