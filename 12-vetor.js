//const numeros = [1, 2, 3, 4, 5];
//console.log(numeros);
//console.log(numeros[2]);

//numeros[2] = 6;
//console.log(numeros);
//console.log(numeros[2]);

//criando variaveis tipo array (vetores)
var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos[0]); //Retorna todos os itens do array
console.log(dinos); //retorna o primeiro indice de array
console.log("");
console.table(dinos); //Cria tabela com os itens do array
console.log("O vetor tem ", dinos.length, "elementos!"); //Mostrando quantidade de itens do array

//Adicionando elementos ao vetor
dinos.push("Brontossauro", "Velociraptor"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //adiciona itens do incio do array
console.table(dinos);

//Alterando elementos com base no índice (posição)
dinos[3] = "titanossauro";
console.table(dinos);

//Obtendo um elemento com base em seu índice
console.log("Primeira posição:", dinos[0]);
console.log("Segunda posição:", dinos[1]);
console.log("Terceiro posição:", dinos[2]);
console.log("Quarta posição:", dinos[3]);

//Removendo elementos do vetor
dinos.pop(); //Remove o último elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro do vetor
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento a partir índice 1, contando 1
console.table(dinos);

console.log(" ");
console.log("--------------------Continuação da aula--------------------");
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao);

var elementoProcurado = "Tricerátops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao);

// Criando copia de array

