class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      return console.log(`${this.nome} já está ligado`);
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      return console.log(`${this.nome} já está desligado`);
    }
    this.ligado = false;
  }
}

class Macbook extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}
class Tablet extends Dispositivo {
  constructor(nome, modelo, wifi) {
    super(nome);
    this.modelo = modelo;
    this.wifi = wifi;
  }
  ligar(){
    console.log("Você alterou o método da calsse pai");
  }
}
const tablet = new Tablet("Ipad", "silver", "SIM");
console.log(tablet);