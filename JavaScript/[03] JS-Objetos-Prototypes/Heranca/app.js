/*
  Problema a ser solucinado:
    Criar um script para um e-comerce que vende diversos tipos de produtos váriados, deve-se contar aumento de preco
    e desconto, para cada produto, individualmente.

    Produtos:
      Camisetas: Cor
      Caneca: Material utilizado
*/
function Produtos(nome, preco){
  this.nome = nome;
  this.preco = preco;
}
Produtos.prototype.aumentoDePreco = function(quantia) {
  this.preco += quantia;
}
Produtos.prototype.descontoDePreco = function(quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produtos.call(this, nome, preco)
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produtos.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumentoDePreco = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
  Produtos.call(this, nome, preco)
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function(){
      return estoque;
    },
    set: function(valor){
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  })
}
Caneca.prototype = Object.create(Produtos.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.descontoDePreco = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual/100))
}

const caneca = new Caneca('One Piace', 30, "Ceramica", 89);
const camiseta = new Camiseta('Adidas', 45, "Preta");


camiseta.aumentoDePreco(50)
caneca.aumentoDePreco(10)
console.log(camiseta);
console.log(caneca);