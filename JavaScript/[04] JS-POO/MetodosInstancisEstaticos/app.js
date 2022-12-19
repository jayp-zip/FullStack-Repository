// Métodos estáticos são métodos que você pode acessar na classe sem extanciar a classe, 
//sem utilizar a palavra "NEW". Basiacmente seria funções que estão dentro da sua classe



class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }
  //Método de instância
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume -= 2;
  }
  //Método estático
  static trocaPilha(){
    console.log("Ok, vou trocar");
  }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(controle1);
