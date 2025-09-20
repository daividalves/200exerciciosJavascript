//Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

function podeDirigir(idade) {
  if (idade >= 18) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você ainda não pode dirigir.");
  }
}

// Exemplos de uso
podeDirigir(20); // Saída: Você pode dirigir.
podeDirigir(16); // Saída: Você ainda não pode dirigir.