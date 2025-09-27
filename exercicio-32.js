// Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

function jogarPedraPapelTesoura() {


    const opcoes = ["pedra", "papel", "tesoura"];

    let continuarJogando = '';

    const regras = {
        pedra: 'tesoura',
        papel: 'pedra',
        tesoura: 'papel',
    };

    const acoesVitoria = {
        pedra: 'quebra',
        papel: 'envolve',
        tesoura: 'corta',
    };

    do {
        const minhaEscolha = prompt('Escolha: pedra, papel ou tesoura').toLocaleLowerCase();

        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

        if (minhaEscolha === escolhaComputador) {

            alert(`Deu empate! Ambos escolheram ${minhaEscolha}.`);

        } else if (regras[minhaEscolha] === escolhaComputador) {

            const acao = acoesVitoria[minhaEscolha];

            alert(`Você ganhou! ${minhaEscolha} ${acao} ${escolhaComputador}.`);

        } else {

            const acao = acoesVitoria[escolhaComputador];

            alert(`O computador ganhou! ${escolhaComputador} ${acao} ${minhaEscolha}.`);
        }

        continuarJogando = prompt('Deseja jogar novamente? Digite sim ou não').toLowerCase();

        if(continuarJogando === 'não'){
            alert('Fim de jogo!');           
        }


    } while (continuarJogando === 'sim');


}