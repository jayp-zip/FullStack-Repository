/*
Funções recursivas são funções que chamam elas mesmas
ATENÇÃO: EXISTE UM LIMITE QUE O NAVEGADOR OU O NODE IMPÕE PARA AS 
CHAMADA RECURSICA
*/

function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}
recursiva(0);
