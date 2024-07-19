const prompt = require("../utils/prompt");

function consultarSaldo(contas) {
    while (true) {
        console.log("\n========== Consultar Saldo ==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar): ").toLowerCase(); // Solicita o nome do titular

        if (titular === "0") return; // Retorna ao menu principal se o usuário digitar 0

        const conta = contas.find(c => c.titular.toLowerCase() === titular); // Procura a conta pelo titular

        if (conta) {
            console.log(`O saldo atual de ${titular} é: R$ ${conta.getSaldo().toFixed(2).replace(".", ",")}\n`);
        } else {
            console.log("Conta não encontrada! Tente novamente.\n"); // Mensagem para conta não encontrada
        }
    }
}

module.exports = consultarSaldo;
