/*
  Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

*/

let numero = prompt("Digite  um número");

// Converte a string para um número
numero = Number(numero);

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}