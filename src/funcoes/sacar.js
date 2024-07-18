const prompt = require("../utils/prompt");

function sacar(contas) {
    console.log("\n==========Menu de Saque.==========\n");
    const titular = prompt("Digite o nome do titular: ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        const valor = parseFloat(prompt("Digite o valor a ser sacado: ")).toFixed(2);
        conta.sacar(valor);
    } else {
        console.log("Conta não encontrada!");
    }
}

module.exports = sacar;
