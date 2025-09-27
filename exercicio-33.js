// Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.


for (let i = 0, anterior = 0, posterior = 1; i < 10; i++) {

    console.log(anterior);

    proximo = anterior + posterior;
    anterior = posterior;
    posterior = proximo;

}






