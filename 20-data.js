// //Criando um obejto do tipo data
// var data1 = new Date();
// console.log(data1);

// //Criando um objeto do tipo "data" com data especifica Date()
// var data2 = new Date("2007=08-28");
// console.log(data2);

// //Extraindo partes de uma data
// var data3 = new Date("2008=03-16");
// console.log(`Data: ${data3}`);
// console.log(`Ano: ${data3.getFullYear()}`);
// console.log(`Mês: ${data3.getMonth() + 1}`);
// console.log(`Dia: ${data3.getDate()}`);

// const mes = [
//   "Janeiro",
//   "Fevereiro",
//   "Março",
//   "Abril",
//   "Maio",
//   "Junho",
//   "julho",
//   "Agosto",
//   "Setembro",
//   "Outrubo",
//   "Novembro",
//   "Dezembro",
// ];
// console.log(`Retornando o mês por escrito!`);
// console.log(`Mês: ${mes[data3.getMonth()]}`);

// const diaDaSemana = [
//   "Domingo",
//   "Segunda",
//   "Terça",
//   "Quarta",
//   "Quinta",
//   "Sexta",
//   "Sábado",
// ];
// console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

// const dataNasc = new Date("2007=08-03");
// const dataAtual = new Date();

// const diferenca = dataAtual.getTime() - dataNasc.getTime();

// const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
// console.log(`idade: ${idade}`);

//MANEIRA 02
console.log(" ===============================");
const dataNasc = new Date("2007=03-14");
const dataAtual = new Date();


const diferenca = dataAtual.getTime() - dataNasc.getTime();
//console.log(`Diferença: ${diferenca}`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);


console.log("==============")


const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(dataAtual.getMonth() < dataNasc.getMonth() || 
  (dataAtual.getMonth() === dataNasc.getMonth() && 
  dataAtual.getDate() < dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  }