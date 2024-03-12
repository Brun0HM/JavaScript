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

// Estrutura do Tabuleiro
const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    if (
      //Verifica coluna
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[1][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[1][i]} ganhou`);
      return tabuleiro[1][i];
    } else if (
      //Verifica linha
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][1] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][1]} ganhou`);
      return tabuleiro[i][1];
    }
  }
  if (
    // Vefifica diagonal
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  } else if (
    // Vefifica diagonal
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  }

  if (!tabuleiro.some((event) => event.includes(" "))) {
    console.log("O jogo empatou");
    return "Empate";
  }
  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual);
  console.table(tabuleiro);
  vencedor = verificaVencedor();

  if (!vencedor) {
    jogar(jogadorAtual);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
  }
}