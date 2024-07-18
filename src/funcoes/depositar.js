const prompt = require("../utils/prompt");

function depositar(contas) {
    console.log("\n==========Menu de depósito.==========\n");
    const titular = prompt("Digite o nome do titular: ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        const valor = parseFloat(prompt("Digite o valor a ser depositado: ")).toFixed(2);
        conta.depositar(valor);
        console.log(`Depósito de R$ ${valor} realizado com sucesso!\n`);
    } else {
        console.log("Conta não encontrada!");
    }
}

module.exports = depositar;
