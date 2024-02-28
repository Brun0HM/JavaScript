var anoNascimento = 2007;

if (anoNascimento > 2004) console.log(`A pessso nasceu depois de 2003!!`);
if (anoNascimento < 2003) console.log(`A pesso nasceu antes de 2003!`);
if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//Função sinaleiro
function sinaleiro(cor) {
  if (cor == "Vermelho") console.log(`Pare`);
  else if (cor == "Amarelo") console.log(`Cuidado`);
  else if (cor == "Verde") console.log(`Siga`);
  else
    console.log("Você informou cores diferentes de verde, amarelo ou vermelho");
}
sinaleiro("Vermelho");
