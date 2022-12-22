class ValidaFormulario{
  constructor(){
    this.formulario = ducument.querySelector('.fomulario')
    this.evento(){
      this.formulario.addEventListener('submit', e =>{
        this.hendleSubmit(e)
      })
    }
    hendleSubmit(e){
      e.preventDefault()
      alert('Fomulario não enviado')
    }
  }
}
const valida = new ValidaFormulario();