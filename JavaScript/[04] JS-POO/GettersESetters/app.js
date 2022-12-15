class Carro {
  constructor(carro, velocidade) {
    this.carro = carro;
    this.velocidade = 0;
  }
  acelerar() {
    if (this.velocidade >= 100) return;
    this.velocidade++;
  }
  freiar() {
    if (this.velocidade <= 0) return;
    this.velocidade--;
  }
}
const carroUm = new Carro("Gol");
for (let i = 1; i <= 200; i++) {
  carroUm.acelerar();
}
console.log(carroUm); 