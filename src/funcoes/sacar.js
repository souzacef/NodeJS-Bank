const prompt = require("../utils/prompt");

function sacar(contas) {
    while (true) {
        console.log("\n==========Menu de Saque.==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar): ");
        
        if (titular === "0") return;

        const conta = contas.find(c => c.titular === titular);

        if (conta) {
            let valor = prompt("Digite o valor a ser sacado: ").replace(",", ".");
            if (!/^\d+(\.\d{1,2})?$/.test(valor) || parseFloat(valor) <= 0) {
                console.log('O valor do saque deve ser um número positivo e válido.');
                continue;
            }
            valor = parseFloat(valor).toFixed(2);
            conta.sacar(parseFloat(valor));
            console.log(`Saque de R$ ${valor.replace(".", ",")} realizado com sucesso!\n`);
            break;
        } else {
            console.log("Conta não encontrada! Tente novamente.\n");
        }
    }
}

module.exports = sacar;
