/*
Alguns métodos para promise
Promise.all: Resolve todas as promise e por fim retorna todos os valores.
Promise.race: Retorna em formato de corrida, a primeira a ser rolsovida é retornada finaliza.

Promise.resolve

Promise.reject


*/
function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
const promises = [
  // "Primeiro valor",
  espera("promise 1", 3000),
  espera("promise 2", 2000),
  espera("promise 3", 1000),
  // "Segundo valor",
  // "Terceiro valor",
];

// Exemplo Promise.all
// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// Exemplo Promise.race

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

function baixarPagina() {
  const flagCache = true;
  if (!flagCache) return espera("Baixa Página", 3000);
  return Promise.resolve("Página em cache");
}

baixarPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((err) => console.log("Erro"));
