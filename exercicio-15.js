//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.


// VERSÃO 1: recursiva, eficiente, sem criar string invertida separada
function isPalindrome(word) {
    if (word.length <= 1) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return isPalindrome(word.slice(1, -1));
}

console.log(isPalindrome("arara"));   // true
console.log(isPalindrome("radar"));   // true
console.log(isPalindrome("banana"));  // false
console.log(isPalindrome("arara"));   // true
console.log(isPalindrome("radar"));   // true
console.log(isPalindrome("banana"));  // false

/* 
// VERSÃO 2: usando recursão para inverter a palavra e comparar
function isPalindrome(word) {
    function reverseWord(wordToReverse) {
        if (wordToReverse.length > 1) {
            return wordToReverse.at(-1) + reverseWord(wordToReverse.slice(0, -1));
        }
        return wordToReverse;
    }
    return reverseWord(word) === word;
}


// VERSÃO 3: usando métodos nativos do JavaScript (mais concisa)
function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
*/
