// var A = 100003;
// var B = 300004;
// var Tempo = 0;

// while (A < B) {
//   A = A * 1.03;
//   B = B * 1.015;
//   Tempo++;
// }
// console.log(
//   `A quantidade de anos até a cidade A ultrapassar a cidade B é de ${Tempo} anos`);

//Criar um "Jogo da velha" que mostre as informações dentro da imagem abaixo. Inserir as informações de forma randomica. Informar ao final quem ganhou X ou O

// console.log(`___|___|___`);
// console.log(`___|___|___`);
// console.log(`   |   |   `);

const matriz = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogador1 = "X";
let jogador2 = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (matriz[linha][coluna] !== " ");

  matriz[linha][coluna] = jogador;
}
jogar(jogador2);
jogar(jogador1);
jogar(jogador2);
jogar(jogador1);
jogar(jogador2);
jogar(jogador1);
jogar(jogador2);
jogar(jogador1);
jogar(jogador2);

//console.table(matriz);
console.log(`${matriz[0][0]}|${matriz[0][1]}|${matriz[0][2]}`);
console.log(`${matriz[1][0]}|${matriz[1][1]}|${matriz[1][2]}`);
console.log(`${matriz[2][0]}|${matriz[2][1]}|${matriz[2][2]}`);
console.table(matriz);
switch (true) {
  case matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]:
    if (matriz[0][0] == "X") {
      console.log(`O jogador 1 ganhou `);
    } else {
      console.log(`O jogador 2 ganhou `);
    }
    break;

  case matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]:
    if (matriz[0][2] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;
  case matriz[0][0] === matriz[0][1] && matriz[0][1] === matriz[0][2]:
    if (matriz[0][0] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;

  case matriz[1][0] === matriz[1][1] && matriz[1][1] === matriz[1][2]:
    if (matriz[1][0] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;
  case matriz[2][0] === matriz[2][1] && matriz[2][1] === matriz[2][2]:
    if (matriz[2][0] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;

  case matriz[0][0] === matriz[1][0] && matriz[1][0] === matriz[2][0]:
    if (matriz[0][0] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;
  case matriz[0][1] === matriz[1][1] && matriz[1][1] === matriz[2][1]:
    if (matriz[0][1] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;
  case matriz[0][2] === matriz[1][2] && matriz[1][2] === matriz[2][2]:
    if (matriz[0][2] == "X") {
      console.log(`O jogador 1 ganhou`);
    } else {
      console.log(`O jogador 2 ganhou`);
    }
    break;
  default:
    console.log("Deu veia");
    break;
}
