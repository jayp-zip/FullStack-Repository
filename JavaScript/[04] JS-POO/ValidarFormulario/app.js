class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.evento();
  }
  evento() {
    this.formulario.addEventListener('submit', e => {
      this.hendleSubmit(e);
    });
  }
  hendleSubmit(e) {
    e.preventDefault();
    const campoValido = this.campoValido();
    const senhasValidas = this.senhasValidas();
    if(campoValido && senhasValidas){
      alert('Cadastro realizado com sucesso');
      this.formulario.subimit();
    }
  }
  senhasValidas(campo){
    let flagSenha = true;
    const senha = this.formulario.querySelector('.senha');
    const repeteSenha = this.formulario.querySelector('.repete-senha');

    if(senha.value !== repeteSenha.value){
      flagSenha = false;
      this.exibeErro(senha, 'Campos senha e repetir senha precisa ser iguais');
      this.exibeErro(repeteSenha, 'Campos senha e repetir senha precisa ser iguais');
    } 
    if(senha.value.length < 6 || senha.value.length > 12){
      flagSenha = false;
      this.exibeErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
    }


    return flagSenha;
  }
  campoValido() {
    let validaCampo = true;
    for(let errorText of this.formulario.querySelectorAll(".error-text")){
      errorText.remove();
    }
    for (let campo of this.formulario.querySelectorAll('.valida')) {
      const label = campo.previousElementSibling.innerText;
      
      if (!campo.value) {
        this.exibeErro(campo, `Campo ${label} não pode está vazio !`);
        validaCampo = false;
      }
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) validaCampo = false;
      }
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) validaCampo = false;
      }
    }
    return validaCampo;
  }
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()){
      this.exibeErro(campo, 'CPF inválido')
      return false
    }
    return true;
  }
  validaUsuario(campo){
    const usuario = campo.value;
    let flagUsuario = true;
    if(usuario.length < 3 || usuario.length > 12){
      this.exibeErro(campo, 'Nome de usuário precisa ter entre 3 e 12 caracteres')
      flagUsuario = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.exibeErro(campo, 'Nome de usuário conter apenas letras e/ou numeros')
      flagUsuario = false;
    }
    return flagUsuario;
  }
  exibeErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}
const valida = new ValidaFormulario();

