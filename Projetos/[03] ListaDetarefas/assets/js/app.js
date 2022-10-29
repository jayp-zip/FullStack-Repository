const inputTarefa = document.getElementById('input-tarefa');
const btnAddTarefa = document.getElementById('btn-add-tarefa');
const tarefas = document.querySelector('#lista-de-tarefas');


inputTarefa.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function limparInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

function criarLi() {
  const li = document.createElement('li');
  return li
}

function criarBtnApagar(li) {
  li.innerText += " " // ESPAÇO ENTRE BTN E TAREFA
  btnApagar = document.createElement('button')
  btnApagar.innerText = 'Apagar'
  btnApagar.setAttribute('class', 'apagar')
  li.appendChild(btnApagar)

}
function criaTarefa(textoInput) {
  const li = criarLi()
  li.innerText = textoInput
  tarefas.appendChild(li)
  limparInput()
  criarBtnApagar(li)
  salvarTeferas()
}

btnAddTarefa.addEventListener('click', function (e) {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
  const elemento = e.target
  if (elemento.classList.contains('apagar')) {
    elemento.parentElement.remove()
    salvarTeferas()
  }
})

function salvarTeferas() {
  const liTaferas = tarefas.querySelectorAll('li')
  const listaDetarefas = []
  for (let tarefa of liTaferas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDetarefas.push(tarefaTexto)
  }
  
  const tarefasJSON = JSON.stringify(listaDetarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function addtarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)


  for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa)
  }
}
addtarefasSalvas()

