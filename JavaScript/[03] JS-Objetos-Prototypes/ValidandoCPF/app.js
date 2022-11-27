function CPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo',{
    enumerable: true,
    get: function(){
      return cpfEnviado.replace(/\D+/g, ""); 
    }
  });
}
CPF.prototype.valida = function(){
  if(typeof this.cpfLimpo === "undefined") return "Cpf não enviado";
  if(this.cpfLimpo.length !== 11) return "Informe um CPF válido";
  if(this.isSequencia()) return "Sequencia incorreta";

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.definirDigitos(cpfParcial);
  const digito2 = this.definirDigitos(cpfParcial + digito1);

  novoCpf = cpfParcial +  digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};
CPF.prototype.definirDigitos = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo --;
    return ac
  }, 0)   
  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)  
}
CPF.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo
}
const cpf = new CPF("421-953-566-39");
console.log(cpf.valida());
