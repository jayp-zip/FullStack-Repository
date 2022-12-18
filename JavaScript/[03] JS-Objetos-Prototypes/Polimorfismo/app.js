// O Polimorfismo é quando subclasses herda a clase pai e muda algumas pequenas funcionalidades


// Conta seria a "SUPER CLASSE", a base de todas aas outras contas, onde voce pode somente ver o saldo
// ContaCorrente herda a Conta, só que com novas funcionalidades como sacar,depositar e sacar dinheiro que ainda não possui
// ContaPoupanca, herda a ContaPoupanca mas não pode sacar o dinheiro que voce não tem, aqui voce só pode sacar o dinheiro que está na poupança
function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuuficiente: ${this.saldo}`) 
    return
  }
  this.saldo -= valor
  this.verSaldo()

}
Conta.prototype.depositar = function (valor) {
  this.saldo +=  valor
  this.verSaldo()
}
Conta.prototype.verSaldo = function () {
  console.log(`Ag/c ${this.agencia}/${this.conta} | Saldo: R$:${this.saldo.toFixed(2)} `)
}

function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`) 
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca;
function ContaPoupanca(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo)

}
ContaPoupanca.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`) 
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

const cp = new ContaPoupanca("001","0002",0)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)