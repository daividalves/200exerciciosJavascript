//Escreva um programa que verifica as cores de um semáforo.


function verificarCorSemaforo(cor) {

    const corFormatada = cor.toLowerCase();

    if (corFormatada === 'verde') {
        console.log('Siga.');
    } else if (corFormatada === 'amarelo') {
        console.log('Atenção! Prepare-se para parar.');
    } else if (corFormatada === 'vermelho') {
        console.log('Sinal fechado.');
    } else {
        console.log('Cor inválida.');
    }
}


verificarCorSemaforo('verde')
verificarCorSemaforo('azul')
verificarCorSemaforo('amarelo')
verificarCorSemaforo('vermelho')