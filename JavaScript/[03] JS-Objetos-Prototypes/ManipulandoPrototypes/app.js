function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumentaPreco = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
}
// Usando função construtora
const produtoUm = new Produto('Jaqueta Adidas', 50);
// produtoUm.desconto(50);
produtoUm.aumentaPreco(10);

// Usando literal
const produtoDois = {
  nome: 'Camiseta Nike',
  preco: 70
}
Object.setPrototypeOf(produtoDois, Produto.prototype);
produtoDois.aumentaPreco(35)

// Criando o obj, setando o prototype dele (Quem va ser o pai dele), e colocando configurações. 
const produtoTres = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Camisa Oakley",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 50,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 32,
  },
});
produtoTres.aumentaPreco(30)


console.log(produtoUm);
console.log(produtoDois);
console.log(produtoTres);
