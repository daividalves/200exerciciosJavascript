// Escreva um programa que verifica se um ano é bissexto.


/*
Regras do ano bissexto:
- Se o ano for divisível por 400 → é bissexto.
- Se o ano for divisível por 100 (mas não por 400) → não é bissexto. 
   Exemplo: 1900, 2100, 2200...
- Se o ano for divisível por 4 (mas não por 100) → é bissexto.
   Exemplo: 2020, 2024, 2028...
- Em todos os outros casos → não é bissexto.
   Exemplo: 2023, 2019...
*/

let ano = Number(prompt("Digite o ano:"));

if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    console.log("O ano é bissexto!");
} else {
    console.log("O ano não é bissexto!");
}