// // Defenindo classe pessoa
// class Pessoa {
//   constructor(pNome, PIdade) {
//     this.nome = pNome;
//     this.idade = PIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objetos do "tipo" pessoa
// var pessoa1 = new Pessoa("Dienifer", 52);
// var p2 = new Pessoa("Taldo pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();
// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// console.log("----------------------------");

// //------------------------------------------------------------------------------
// //Abstração: Abstrair as caracteristicas mais importantes e descartar detalhes irrelevantes
// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );

// meuPet.alimentar();
// console.log("--------------------Herança--------------------");
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`🐶 Au au! 🐶`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("  ");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();
// //------------------------------------------------------------
// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   getNome() {
//     return this.nome;
//   }
//   setNome(novoNome) {
//     this.nome = novoNome;
//   }
// }
// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// console.log(novoPetzinho.getNome()); //Bob
// novoPetzinho.setNome("Rex");
// console.log(novoPetzinho.getNome()); //Rex

// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("----------------------Exemplos----------------------");
//Criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obeterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  obeterArea() {
    return this.comprimento * this.largura;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
// Criando um objeto do "tipo" Retângulo
var ret1 = new Retangulo(10, 15)

function displayRet(retangulo){
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`)
  console.log(`largura = ${retangulo.largura}`)
  console.log(`Área = ${retangulo.obeterArea()}`)
  console.log(`Perimetro = ${retangulo.obeterPerimetro()}`)
}
displayRet (ret1)
ret1.setComprimento(20)
displayRet(ret1)
ret1.setLargura(20)
displayRet(ret1)