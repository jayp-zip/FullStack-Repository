class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      return console.log(`${this.nome} já está ligado`);
    } this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      return console.log(`${this.nome} já está desligado`);
    } this.ligado = false;
  }
}

class Macbook extends Dispositivo{
  constructors(){
    
  }
}