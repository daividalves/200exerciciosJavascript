//Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.


function adivinharNumero() {
    let min = 1;
    let max = 100;
    let resposta = '';

    console.log("Pense em um número entre 1 e 100.");
    console.log("Eu vou tentar adivinhar. Me diga se o número é 'maior', 'menor' ou 'certo'.");

    while (resposta !== 'certo') {

        const tentativa = Math.floor((min + max) / 2);

        resposta = promptMaiorMenorCerto(`Meu palpite é ${tentativa}. O número que você pensou é 'maior', 'menor' ou 'certo'?`);

        if (resposta === 'certo') {
            return alert(`Acertei o número. Ele é ${tentativa}.`);
        } else if (resposta === 'maior') {
            min = tentativa + 1;
        } else {
            max = tentativa - 1;
        }

        if (min > max) {
            const numeroInconsistente = min > 100 ? 'O número pensado não pode ser maior que 100' : 'O número pensado não pode ser menor que 1';
            alert(`Ops! Suas respostas foram inconsistentes. ${numeroInconsistente}. O jogo será reiniciado.`);
            min = 1;
            max = 100;
            resposta = '';
        }
    }
}


function promptMaiorMenorCerto(mensagem) {
    const opcoesValidas = ['maior', 'menor', 'certo'];
    let valor;
    
    do {
        valor = prompt(mensagem);
        if (valor) {
            valor = valor.toLowerCase();
        }
    } //while (valor !== "maior" && valor !== "menor" && valor !== "certo");
        while (!opcoesValidas.includes(valor));
    return valor;
}

adivinharNumero();