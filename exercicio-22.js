//Escreva um programa que determina o número de dias em um mês.

// Função para determinar o número de dias em um mês
function diasNoMes(mes, ano) {
    // Converte a entrada do mês para minúsculas
    const mesFormatado = mes.toLowerCase();

    switch (mesFormatado) {
        case 'janeiro':
        case 'março':
        case 'maio':
        case 'julho':
        case 'agosto':
        case 'outubro':
        case 'dezembro':
            return 31;
        case 'abril':
        case 'junho':
        case 'setembro':
        case 'novembro':
            return 30;
        case 'fevereiro':
            // Lógica para ano bissexto
            if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
                return 29;
            }
            return 28;
        default:
            return "Mês inválido.";
    }
}

// Exemplos de uso
console.log(`Janeiro tem ${diasNoMes('Janeiro', 2024)} dias.`); // Saída: Janeiro tem 31 dias.
console.log(`Fevereiro de 2024 tem ${diasNoMes('Fevereiro', 2024)} dias.`); // Saída: Fevereiro de 2024 tem 29 dias. (2024 é bissexto)
console.log(`Fevereiro de 2023 tem ${diasNoMes('Fevereiro', 2023)} dias.`); // Saída: Fevereiro de 2023 tem 28 dias.
console.log(`Abril tem ${diasNoMes('Abril', 2024)} dias.`); // Saída: Abril tem 30 dias.