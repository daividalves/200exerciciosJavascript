//Escreva um programa que imprime uma classificação baseada na nota de um aluno.

function classificarNota(nota) {
  if (nota >= 9) {
    console.log("Classificação: A");
  } else if (nota >= 8) {
    console.log("Classificação: B");
  } else if (nota >= 7) {
    console.log("Classificação: C");
  } else if (nota >= 6) {
    console.log("Classificação: D");
  } else {
    console.log("Classificação: F");
  }
}

// Exemplos de uso
classificarNota(9.5); // Saída: Classificação: A
classificarNota(8.2); // Saída: Classificação: B
classificarNota(7.0); // Saída: Classificação: C
classificarNota(6.5); // Saída: Classificação: D
classificarNota(5.9); // Saída: Classificação: F