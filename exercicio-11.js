// Escreva um programa que verifica se uma pessoa pode votar com base na idade.

const idade = Number(prompt("Por favor, digite sua idade:"));


if (isNaN(idade)) {

    console.log("Idade inválida. Por favor, digite um número.");

} else {
    if (idade >= 18) {

        console.log("Você pode votar. O voto é obrigatório.");

    } else if (idade >= 16) {

        console.log("Você pode votar. O voto é facultativo.");

    } else {

        console.log("Você não pode votar.");

    }
}