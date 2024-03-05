let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

var x = 20;

while (x > 10) {
  console.log("Entrei no laço while...");
  x--;
}
console.log("Terminei!");

let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Lançamento");

//Estourando limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`Gastei R$ ${gasto.toFixed(2)} ------
    Fatura: R$ ${fatura.toFixed(2)}`);

  fatura > limite 
  && console.log(`Estorou o limite do cartão`); //$$ Faz somente um IF, sem else
}

//Estourando o limite do cartão com while
var limite = 500
var fatura = 0

do{
    let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`Gastei R$ ${gasto.toFixed(2)} ------
    Fatura: R$ ${fatura.toFixed(2)}`);
    fatura > limite 
  && console.log(`Estorou o limite do cartão`)
}
while (fatura <= limite )
