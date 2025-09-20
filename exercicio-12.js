//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.


const mediaFinal = Number(prompt("Digite a média final do estudante:"));

if (mediaFinal >= 7) {
    console.log("Aprovado");
} else if (mediaFinal >= 5) {
    console.log("Em Recuperação");
} else {
    console.log("Reprovado");
}