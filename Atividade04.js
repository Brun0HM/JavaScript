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

var usuario = ["Thiago", 80, "verde.", "Banana.", "itapui", "Douglas."];
console.table(usuario);
console.log(
  "Olá",
  usuario[0],
  "Seja bem vindo ao nosso sistema. \nVocê mora em",
  usuario[4],
  "E tem um pet chamado",
  usuario[5],
  "\nsua idade é",
  usuario[1],
  "anos. Gosta muito da fruta",
  usuario[3],
  "\nSua cor favorita é",
  usuario[2]
);
