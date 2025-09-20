//Escreva um programa que determina a estação do ano com base no mês.


function determinarEstacao(mes, dia) {
    const mesFormatado = mes.toLowerCase();

    // Verão
    if (
        (mesFormatado === 'dezembro' && dia >= 21) ||
        mesFormatado === 'janeiro' ||
        (mesFormatado === 'março' && dia < 20)
    ) {
        console.log("É verão.");
    }

    // Outono
    else if (
        (mesFormatado === 'março' && dia >= 20) ||
        mesFormatado === 'abril' ||
        (mesFormatado === 'junho' && dia < 21)
    ) {
        console.log("É outono.");
    }

    // Inverno
    else if (
        (mesFormatado === 'junho' && dia >= 21) ||
        mesFormatado === 'julho' ||
        (mesFormatado === 'setembro' && dia < 23)
    ) {
        console.log("É inverno.");
    }

    // Primavera
    else if (
        (mesFormatado === 'setembro' && dia >= 23) ||
        mesFormatado === 'outubro' ||
        (mesFormatado === 'dezembro' && dia < 21)
    ) {
        console.log("É primavera.");
    } else {
        console.log("Dados de mês ou dia inválidos.");
    }
}

// Exemplos de uso
determinarEstacao("Dezembro", 15); // Saída: É primavera.
determinarEstacao("Dezembro", 25); // Saída: É verão.
determinarEstacao("março", 10);    // Saída: É verão.
determinarEstacao("março", 25);    // Saída: É outono.