fetch("./pessoas.json")
  .then((resposta) => resposta.json())
  .then((json) => exibeResultado(json));

function exibeResultado(json) {
  const table = document.createElement("table");
  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome);

    let tdIdade = document.createElement("td");
    tdIdade.innerHTML = pessoa.idade;
    tr.appendChild(tdIdade);

    let tdSalario = document.createElement("td");
    tdSalario.innerHTML = pessoa.salario;
    tr.appendChild(tdSalario);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}
