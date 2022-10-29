const tempo = document.querySelector('.tempo')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const container = document.querySelector('.container')
const titulo = document.querySelector('#titulo')
let segundos = 0
let timer = 0
function criarTempo(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

function iniciarTempo(params) {
    timer = setInterval(() => {
    segundos++
    tempo.innerHTML = criarTempo(segundos)
  }, 1000)
}
iniciar.addEventListener('click', function (e) {
  tempo.classList.add('iniciado')
  container.classList.add('sombraVerde')
  tempo.classList.remove('pausado')
  titulo.innerText = 'TEMPO ROLANDO'
  clearInterval(timer)
  iniciarTempo()
})
pausar.addEventListener('click', function (e) {
  tempo.classList.add('pausado')
  container.classList.add('sombraLaranja')
  titulo.innerText = 'TEMPO PAUSADO'
  clearInterval(timer)
})
zerar.addEventListener('click', function (e) {
  tempo.classList.remove('pausado')
  tempo.classList.remove('iniciado')
  container.classList.remove('sombraLaranja')
  container.classList.remove('sombraVerde')
  titulo.innerText = 'TEMPO'
  clearInterval(timer)
  tempo.innerHTML = '00:00:00'
  segundos = 0
})