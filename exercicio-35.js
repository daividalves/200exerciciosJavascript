//Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2).


/*
   Opção 1: Forma mais eficiente
   Solução mais eficiente em termos de performance, pois usa uma fórmula matemática direta em vez de acumular somas.
*/

for (let n = 1, triangular = 0; n <= 10; n++) {

    triangular = n * (n + 1) / 2;
    console.log(triangular)

}


console.log('\n');

/*
    Opção 2: Usando a Soma Cumulativa (Para refletir a natureza da sequência)
    Esta versão não usa a fórmula n(n+1)/2, mas sim a definição de que o próximo número triangular é a soma do anterior mais o índice atual. É mais fiel à progressão.
*/


for (let n = 1, triangular = 0; n <= 10; n++) {

    triangular = triangular + n;
    console.log(triangular);

}