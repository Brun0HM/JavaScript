var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas); // Cria uma tabela organizando as frutas

frutas.push("Tangerina");
console.table(frutas); //Colocar fruta na ultima linha

frutas.unshift("Goiaba");
console.table(frutas); // Coloca fruta na primeira linha

console.log(frutas[5]); // Mostra a fruta no indice 5

var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas); // Retira a fruta da seguinte posição

console.log("------------------Cópia------------------");

var frutascopy = frutas.slice(2, 5);
console.table(frutascopy); // Cópia de array

console.log("------------------Criar 5 elementos numericos------------------");
var numerico = [5, 4, 3, 2, 1];
console.table(numerico);
console.log(numerico[2]);
console.log("------------------Cópia------------------");
var numericocopy = numerico.slice(1, 5);
console.table(numericocopy);

numericocopy[0] = numerico[0] * 2;
numericocopy[1] = numerico[1] * 2;
numericocopy[2] = numerico[2] * 2;
numericocopy[3] = numerico[3] * 2;
numericocopy[4] = numerico[4] * 2;
console.table(numericocopy);
