// Escreva um programa que determina se um número é par ou ímpar.


function parOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }
}

// Exemplos de uso
parOuImpar(7);  // Saída: O número 7 é ímpar.
parOuImpar(12); // Saída: O número 12 é par.
parOuImpar(0);  // Saída: O número 0 é par.