/*
Getters e Setters: É uma maneira de proteger uma propriedade
Getters: Obter valor
Setters: Setar Valor
*/
function Produtos(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
  enumerable: true,
      configurable: true,
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {
        if (typeof valor !== "number"){   
          console.log("Informe um numero"); 
          return;
        } 
        estoquePrivado = valor
      },
    })
}
produtoUm = new Produtos("Camisetas", 20, '1a');
produtoUm.estoque = "500"
console.log(produtoUm.estoque);