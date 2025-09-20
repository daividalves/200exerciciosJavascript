/*
 Declare duas variáveis e atribua valores booleanos a elas. 
 
 Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. Imprima os resultados.

*/


// Declarando e atribuindo valores booleanos
const A = true;
const B = false;

// Operador Lógico AND (&&)
const resultadoAND = A && B;
console.log(`Resultado de A && B (true && false): ${resultadoAND}`); // Saída: false

// Operador Lógico OR (||)
const resultadoOR = A || B;
console.log(`Resultado de A || B (true || false): ${resultadoOR}`); // Saída: true

// Operador Lógico NOT (!)
const resultadoNOT_A = !A;
const resultadoNOT_B = !B;

console.log(`Resultado de !A (!true): ${resultadoNOT_A}`); // Saída: false
console.log(`Resultado de !B (!false): ${resultadoNOT_B}`); // Saída: true