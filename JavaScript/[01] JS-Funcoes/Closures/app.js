/*
  Closures: É a habilidade de determinada função acessar seu escopo léxico.
  No exemplo abaixo a função "anônima" tem acesso a 3 escopos, sendo eles
  [Escopo Global],
  [Escopo retornarFuncao] e
  [Seu escopo atual]
*/

function retornaFucao() {
  const nome = 'Julianna'
  return function () {
    return nome
  }
}

const funcao = retornaFucao()
console.dir(funcao);