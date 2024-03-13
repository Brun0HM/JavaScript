// Criar uma classe Aluno em JavaScript que represente um aluno em uma
// instituição de ensino. A classe deve receber informações do aluno, calcular sua
// idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)
// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

// class Aluno {
//   constructor(nome, ra, nascimento, curso) {
//     this.nome = nome;
//     this.ra = ra;
//     this.nascimento = nascimento;
//     this.curso = curso;
//   }
//   calcularIdade() {
//     return 2024 - this.nascimento;
//   }
//   apresentar() {
//     console.log(
//       `Olá meu nome é ${
//         this.nome
//       } tenho ${this.calcularIdade()} anos, meu ra é ${this.ra} e meu curso é ${
//         this.curso
//       }`
//     );
//   }
// }
// const aluno1 = new Aluno("Bruno", 4932, 2007, "Desenvolvimento de Sistemas");
// aluno1.apresentar();

//Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// crie um sorvete de morango grande
// crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51
class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  pedido() {
    console.log(
      `O sabor escolhido foi ${this.sabor} tamanho ${this.tamanho} e seu valor é ${this.preco} R$`
    );
  }
  alterarValor(precoNovo) {
    this.preco = precoNovo;
    console.log(
      `O valor novo do sorvete sabor ${this.sabor} foi alterado para ${precoNovo}`
    );
  }
}
const sorveteMorango = new sorvete("Morango", 10.9, "G");
const sorveteChocolate = new sorvete("chocolate", 5.9, "P");
const sorveteMelancia = new sorvete("melancia", 2.5, "M");

sorveteMorango.pedido();
sorveteChocolate.pedido();
sorveteMelancia.pedido();
sorveteMorango.alterarValor(10.51);

// console.log("-------------------------------------------------------------");

// function texto1(str1, str2) {
//   // Converte ambas as strings para minúsculas
//   const Teste1 = str1.toLowerCase();
//   const Teste2 = str2.toLowerCase();

//   // Compara as strings minúsculas
//   return Teste1 === Teste2;
// }
// const str6 = "Olá, Mundo!";
// const str2 = "olá, mundo!";

// console.log(texto1(str1, str2));

// const str3 = "Olá, Mundo!";
// const str4 = "Olá, Terra!";

// console.log(texto1(str3, str4));

console.log("-------------------------------------------------------------");
function extrairNumeros(str) {
  const numeros = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numeros.push(str[i]);
    }
  }
  return numeros;
}

// Exemplos de uso
const str1 = "Olá, Mundo! 12345";
const numeros1 = extrairNumeros(str1);
console.log(numeros1); // ["12345"]

const str2 = "O preço é R$ 10,99.";
const numeros2 = extrairNumeros(str2);
console.log(numeros2); // ["10", "99"]

console.log("-------------------------------------------------------------");
function inverterFrase(frase) {
  const palavras = frase.split(" ");
  return palavras.reverse().join("");
}

const frase = "Este é um exemplo de frase invertida";
const fraseinvertida = inverterFrase(frase);
console.log(fraseinvertida);
