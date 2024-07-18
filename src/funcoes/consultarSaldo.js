const prompt = require("../utils/prompt");

function consultarSaldo(contas) {
    while (true) {
        console.log("\n==========Consultar Saldo.==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar ao menu): ");
        
        if (titular === '0') return;

        if (!/^[A-Za-z\s]+$/.test(titular)) {
            console.log('Titular deve conter apenas letras e espaços.');
            continue;
        }

        const conta = contas.find(c => c.titular === titular);
        if (!conta) {
            console.log('Conta não encontrada!');
            continue;
        }

        console.log(`O saldo atual de ${titular} é: R$ ${conta.getSaldo().toFixed(2).replace(".",",")}\n`);
        break;
    }
}

module.exports = consultarSaldo;
