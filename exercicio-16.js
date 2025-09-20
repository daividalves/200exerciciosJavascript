//Escreva um programa que determina o maior entre três números.


let numero1 = 10;
let numero2 = 80;
let numero3 = 60;

// Exemplo 1: Lógica com if/else if/else para encontrar o maior número
if (numero1 > numero2 && numero1 > numero3) {
  console.log('O maior número é: ' + numero1);
} else if (numero2 > numero3) {
  console.log('O maior número é: ' + numero2);
} else {
  console.log('O maior número é: ' + numero3);
}


/*
// Exemplo 2: Usando loop para encontrar o maior número (mais escalável)
const numeros = [numero1, numero2, numero3];
let maiorNumero = -Infinity;

for (const numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}
console.log(maiorNumero);
*/


/*
// Exemplo 3: Usando a função embutida Math.max() (a mais curta)
const maiorNumeroComMath = Math.max(numero1, numero2, numero3);
console.log(maiorNumeroComMath);
*/