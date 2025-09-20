/*

Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o
aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7)

*/

let nota1 = Number(prompt("Digite o valor da primeira nota:"));
let nota2 = Number(prompt("Digite o valor da segunda nota:"));

const media = (nota1 + nota2) / 2;


if (media >= 7) {

    console.log('O aluno foi aprovado.');

} else {

    console.log('O aluno foi reprovado.');

}


