//Laço de repetição FOR
//Escrever para o usuário 1000x "Prestar mais atenções nas aulas!"
for (let i = 1; i < 1000; i += 2) {
  console.log(i);
}

//Mostrando números impares com IF
for (let i = 0; i < 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log("---------------------------------------------------");
console.log("Esrever de 1 a 20");
//Escreva todos os numeros de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("---------------------------------------------------");
console.log("Maneira 01");
//Escreva rdos os números PARES entre 1 a 20 com FOR
for (let m = 2; m <= 20; m += 2) {
  console.log(m);
}
console.log("---------------------------------------------------");
console.log("Maneira 02");
for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
}
console.log("---------------------------------------------------");

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos

var numeros = [5, 6, 14, 0, 9, 7, 2, 8];
var sum = 0;
for (var i = 0; i < numeros.length; i++) {
  // console.log(numeros[i])
  sum += numeros[i];
}
console.log(sum);

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor

var numeros = [5, 6, 14, 0, 9, 7, 2, 8];
var multi = 0;
for (var i = 0; i < numeros.length; i++) {
  // console.log(numeros[i])
  numeros[i] *= 3;
}
//console.table(numeros);

//Dado a matriz 2x3, Escrever para o usuário todos os seus elementos
// com as respectivas posições da matriz
// [8,4,1]
// [3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  //console.log(linha)
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz [ ${linha},${coluna}] = ${matriz}[linha][coluna]`);
  }
}
