/*
DefineProperty: Permite que configure apenas um elemento
DefineProperties: Permite que configure varios elemento

enumerable: mostta a chave do objeto
value: racebe o valor do objeto
writable: recebe um boleano perguntadno se o valor pode ser alterado 
configurable:  recebe um boleano perguntando se a função pode ou não ser reconfigurável e tambèm permite que a chave seja ou não seja apagada
*/  
function Produtos(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false,
  });
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

produtoUm = new Produtos("Camisetas", 20, 3);
produtoUm.estoque = 9000;
console.log(produtoUm);
