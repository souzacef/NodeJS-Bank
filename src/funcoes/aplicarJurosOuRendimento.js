const prompt = require("../utils/prompt");
const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");

function aplicarJurosOuRendimento(contas) {
    while (true) {
        console.log("\n==========Menu de Juros e Rendimento.==========\n");
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

        if (conta instanceof ContaCorrente) {
            conta.aplicarJuros();
            console.log("Juros aplicados com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".",",")}`);
        } else if (conta instanceof ContaPoupanca) {
            conta.aplicarRendimento();
            console.log("Rendimento aplicado com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".",",")}`);
        } else {
            console.log('Esta conta não possui juros ou rendimento.');
        }
        break;
    }
}

module.exports = aplicarJurosOuRendimento;
