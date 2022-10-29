/*
  Um Objeto é formado por um par, chaves e valor
*/
const pessoa = new Object()
pessoa.nome = "João";
pessoa.sobrenome = "Vitor";
pessoa.idade = 90;
pessoa.mostraNomePessoa = function () {
  return console.log(`${this.nome} está falando`);
}
pessoa.mostraDataNascimentoPessoa = function () {
  const anoAtual = new Date()
  return console.log(anoAtual.getFullYear() - this.idade);
}
pessoa.mostraNomePessoa();
pessoa.mostraDataNascimentoPessoa();