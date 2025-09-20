//Escreva um programa que verifica se um número está dentro de um determinado intervalo.

function verificarIntervalo(numero, inicio, fim) {

    if (numero >= inicio && numero <= fim) {

        return `O número ${numero} está dentro do intervalo de ${inicio} a ${fim}.`;

    }

    return `O número ${numero} está fora do intervalo de ${inicio} a ${fim}.`;

}



console.log(verificarIntervalo(15, 10, 20)); // Saída: O número 15 está dentro do intervalo de 10 a 20.
console.log(verificarIntervalo(5, 10, 20));  // Saída: O número 5 está fora do intervalo de 10 a 20.
console.log(verificarIntervalo(25, 10, 20));  // Saída: O número 25 está fora do intervalo de 10 a 20.