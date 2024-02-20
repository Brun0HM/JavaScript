//Operadores Lógicos
var manha = true;
var sono = true;

console.log("-------------------");
console.log("Manhã:", manha, "|Estou com sono?", sono);

console.log("Está de manhã E estou com sono?(&&):", manha && sono);//commparando se é de manhã e estou com sono
console.log("Está de manhã E estou com sono?(||):", manha || sono);

sono = false
console.log("-------------------");
console.log("Operador AND (E):", manha && sono);//commparando se é de manhã e estou com sono
console.log("Operador OR (OU):", manha || sono);

manha = false
console.log("-------------------");
console.log("Operador AND (E):", manha && sono);//commparando se é de manhã e estou com sono
console.log("Operador OR (OU):", manha || sono);