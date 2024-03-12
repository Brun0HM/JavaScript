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

class Aluno {
  constructor(nome, ra, nascimento, curso) {
    this.nome = nome;
    this.ra = ra;
    this.nascimento = nascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.nascimento;
  }
  apresentar() {
    console.log(
      `Olá meu nome é ${this.nome} tenho ${this.calcularIdade()} anos, meu ra é ${this.ra} e meu curso é ${this.curso}`
    );
  }
}
const aluno1 = new Aluno("Bruno", 4932, 2007, "Desenvolvimento de Sistemas");
aluno1.apresentar();
