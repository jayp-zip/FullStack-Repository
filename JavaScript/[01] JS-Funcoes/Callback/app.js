/*
  Callback: Callback são funções que sào executadas quando uma "ação" ocorre e 
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
