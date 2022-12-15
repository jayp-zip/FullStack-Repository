function criarPessoa(nome, sobrenome) {
  const pessoaPrototype ={
    nome,
    sobrenome,
    falar(){console.log(`${nome} está falando`)},
    comer(){console.log(`${nome} vai comer Frango`)},
    beber(){console.log(`${nome} gosta de vinho`)}
  }
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome},

  })
} 
const pessoa = criarPessoa("Joao", "Vitor")
console.log(pessoa);

