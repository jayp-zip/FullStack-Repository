// Validando CPF com classes

export default class validaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }
  verificaSequancia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }
  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = validaCPF.geraDigito(cpfSemDigitos);
    const digito2 = validaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2 
  }
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let decrecente = cpfSemDigitos.length + 1;
    for (let stringNumerica of cpfSemDigitos) {
      total += decrecente * Number(stringNumerica);
      decrecente--;

    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }
  valida() {
    if (!this.cpfLimpo) return "CPF no formato inválido";
    if (typeof this.cpfLimpo !== "string") return "CPF não é uma string";
    if (this.cpfLimpo !== 11) return "O CPF não esta no seu devido formato";
    if (this.verificaSequancia()) return "Sequancia identificada";
    this.geraNovoCpf();
    return this.novoCPF === this.cpfLimpo;
  }
}
