const pessoas = [ 
  {id: 3, nome: 'Joao'},
  {id: 2, nome: 'Luiz'},
  {id: 1  , nome: 'Davi'}
]

const novaPessoa = new Map();
for(const pessoa of pessoas){
  const { id } = pessoa
  novaPessoa.set(id, {...pessoa})
}

console.log(novaPessoa);