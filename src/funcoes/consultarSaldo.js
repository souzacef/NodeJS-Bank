const prompt = require("../utils/prompt");

function consultarSaldo(contas) {
    console.log("\n==========Consultar Saldo.==========\n");
    const titular = prompt("Digite o nome do titular: ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        console.log(`O saldo atual de ${titular} é: R$ ${conta.getSaldo()}\n`);
    } else {
        console.log("Conta não encontrada!\n");
    }
}

module.exports = consultarSaldo;
