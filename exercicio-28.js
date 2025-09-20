//Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

let contador = 1;

let soma = 0;

while (contador <= 100) {

    soma += contador++;

}

console.log(`A soma dos números de 1 a 100 é: ${soma}`);
