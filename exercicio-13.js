/*
    Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem 
    indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
*/


const peso = Number(prompt("Digite o seu peso em kg (ex: 70):"));
const altura = Number(prompt("Digite a sua altura em metros (ex: 1.75):"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Por favor, digite valores válidos para peso e altura.");
} else {

  const IMC = peso / (altura * altura);

  console.log(`Seu IMC é: ${IMC.toFixed(2)}`);

  if (IMC < 18.5) {
    console.log("Classificação: Magreza");
  } else if (IMC >= 18.5 && IMC < 25) {
    console.log("Classificação: Peso normal");
  } else if (IMC >= 25 && IMC < 30) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }

  /*
  // Segunda lógica (alternativa): Classificação do IMC da maior para a menor categoria
  // Essa abordagem também é válida e funciona corretamente.
  if (IMC >= 30) {
      console.log('Classificação: Obesidade');
  } else if (IMC >= 25) {
      console.log('Classificação: Sobrepeso');
  } else if (IMC >= 18.5) {
      console.log('Classificação: Peso normal');
  } else {
      console.log('Classificação: Magreza');
  }
  */
}



