const _velocidade = Symbol('velocidade'); 


class Carro {
  constructor(carro, velocidade) {
    this.carro = carro;
    this[_velocidade] = 0;
  }
  get velocidade() { return this._velocidade; }

  set velocidade(valor) {
    if (typeof valor !== "Number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}
   
const carroUm = new Carro("Gol");
for (let i = 1; i <= 50; i++) {
  carroUm.acelerar();
  console.log(i);
}
carroUm.velocidade  = 2000
console.log(carroUm); 