/* 
  Nesse exemplo foi criado 3 funcoes com tempo diferentes, sendo assim, 
  Não tem ua ordem certa pois é aleatori, precisamos deixar isso em uma ordem
  Resumindo, usaremos promisse para que as funcoes sejam chamadas em suas
  devidas ordens idenpendente de quanto tempo demorar
*/

// Criando função que gera um tempo entre 1 e 3 segundos
function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
// Criando função que demore um certo tempo apra responder
function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
espera("Pegando informação do usuario", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera("Enviando Para o banco", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return espera("Chegou, devolvendo para usuario", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() =>{
    console.log('Usuario recebeu');
  })
  .catch();
