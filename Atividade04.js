var matriz = [
  [7, 2, 1],
  [6, 3, 2],
  [5, 4, 3],
];
console.table(matriz);
console.log("--------------------------------------------------------------");
console.log("A diagonal 1 é", matriz[0][0], matriz[1][1], matriz[2][2]);
console.log("--------------------------------------------------------------");
console.log("A diagonal 2 é", matriz[2][2], matriz[1][1], matriz[0][0]);
console.log("--------------------------------------------------------------");

console.log("A diagonal 3 é", matriz[2][0], matriz[1][1], matriz[0][2]);
console.log("--------------------------------------------------------------");

console.log("A diagonal 4 é", matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("--------------------------------------------------------------");
console.log(" ");
console.log(" ");

console.log(
  "---------------------------------AtividadePart2---------------------------------"
);

var user = ["Thiago", 80, "verde", "Banana", "itapui", "Douglas"];
console.table(user);
console.log(`Olá ${user[0]}! Seja bem-vindo ao nosso sistema.`);
console.log(
  `Você mora no endereço: ${user[4]}, e tem um pet chamado ${user[5]}.`
);
console.log(`Sua idade é ${user[1]} e gosta muito de fruta ${user[3]}.`);
console.log(`Sua cor favorita é ${user[2]}`);

