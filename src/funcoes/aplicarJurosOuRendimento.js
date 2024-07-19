const prompt = require("../utils/prompt");
const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");

function aplicarJurosOuRendimento(contas) {
    while (true) {
        console.log("\n========== Menu de Juros e Rendimento ==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar): ").toLowerCase(); // Solicita o nome do titular

        if (titular === "0") return; // Retorna ao menu principal se o usuário digitar 0

        const conta = contas.find(c => c.titular.toLowerCase() === titular); // Procura a conta pelo titular

        if (conta) {
            if (conta instanceof ContaCorrente) {
                conta.aplicarJuros(); // Aplica juros se for uma conta corrente
                console.log("Juros aplicados com sucesso!\n");
                console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".", ",")}`);
            } else if (conta instanceof ContaPoupanca) {
                conta.aplicarRendimento(); // Aplica rendimento se for uma conta poupança
                console.log("Rendimento aplicado com sucesso!\n");
                console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".", ",")}`);
            }
            return; // Retorna ao menu principal após aplicar juros ou rendimento
        } else {
            console.log("Conta não encontrada! Tente novamente.\n"); // Mensagem para conta não encontrada
        }
    }
}

module.exports = aplicarJurosOuRendimento;
