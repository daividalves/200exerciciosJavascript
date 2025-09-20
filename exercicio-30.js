//Usando um laço for, imprima todos os números primos de 1 a 100.


//Um número é primo se for maior que 1 e só for divisível por 1 e por ele mesmo.


for (let i = 1; i <= 100; i++) {

    let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    } else {

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

    }

    if (isPrime) {
        console.log(i);
    }
}