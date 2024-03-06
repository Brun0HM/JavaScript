const jogador1 = "X";
const jogador2 = "O";

let turno = jogador1;

const matriz = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function jogar(linha, coluna) {
  if (matriz[linha][coluna] !== " ") {
    return;
  }

  matriz[linha][coluna] = turno;

  if (verificarVencedor(matriz)) {
    console.log(`O jogador ${turno} venceu!`);
    return;
  }

  turno = turno === jogador1 ? jogador2 : jogador1;
}

function verificarVencedor(matriz) {
  // Verificação de linhas
  for (let i = 0; i < 3; i++) {
    if (
      matriz[i][0] === matriz[i][1] &&
      matriz[i][1] === matriz[i][2] &&
      matriz[i][0] !== " "
    ) {
      return matriz[i][0];
    }
  }

  // Verificação de colunas
  for (let j = 0; j < 3; j++) {
    if (
      matriz[0][j] === matriz[1][j] &&
      matriz[1][j] === matriz[2][j] &&
      matriz[0][j] !== " "
    ) {
      return matriz[0][j];
    }
  }

  // Verificação de diagonais
  if (
    matriz[0][0] === matriz[1][1] &&
    matriz[1][1] === matriz[2][2] &&
    matriz[0][0] !== " "
  ) {
    return matriz[0][0];
  }

  if (
    matriz[0][2] === matriz[1][1] &&
    matriz[1][1] === matriz[2][0] &&
    matriz[0][2] !== " "
  ) {
    return matriz[0][2];
  }

  // Empate
  if (!matriz.some((linha) => linha.some((coluna) => coluna === " "))) {
    console.log("Empate!");
    return;
  }

  return null;
}

// Exemplo de jogadas
jogar(0, 0);
jogar(1, 1);
jogar(2, 2);
jogar(0, 1);
jogar(1, 2);
jogar(2, 0);
jogar(0, 2);
jogar(1, 0);
jogar(2, 1);

console.table(matriz);

// Imprimir a matriz apenas uma vez
console.log(
  `<span class="math-inline">\{matriz\[0\]\[0\]\}\|</span>{matriz[0][1]}|${matriz
