const prompt = require("../utils/prompt");
const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");

function aplicarJurosOuRendimento(contas) {
    console.log("\n==========Menu de Juros e Rendimento.==========\n");
    const titular = prompt("Digite o nome do titular: ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        if (conta instanceof ContaCorrente) {
            conta.aplicarJuros();
            console.log("Juros aplicados com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${conta.getSaldo()}`);
        } else if (conta instanceof ContaPoupanca) {
            conta.aplicarRendimento();
            console.log("Rendimento aplicado com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${conta.getSaldo()}`);
        }
    } else {
        console.log("Conta não encontrada!\n");
    }
}

module.exports = aplicarJurosOuRendimento;
