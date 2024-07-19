const prompt = require("../utils/prompt");

function depositar(contas) {
    while (true) {
        console.log("\n========== Depósito ==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar): ").toLowerCase(); // Solicita o nome do titular

        if (titular === "0") return; // Retorna ao menu principal se o usuário digitar 0

        const conta = contas.find(c => c.titular.toLowerCase() === titular); // Procura a conta pelo titular

        if (conta) {
            let valor = "";
            while (true) {
                valor = prompt("Digite o valor do depósito: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(valor) || parseFloat(valor) <= 0) {
                    console.log('O valor do depósito deve ser um número positivo e válido.'); // Validação do valor do depósito
                } else {
                    valor = parseFloat(valor).toFixed(2);
                    break;
                }
            }
            conta.depositar(parseFloat(valor)); // Realiza o depósito na conta
            console.log(`Depósito de R$ ${valor.replace(".", ",")} realizado com sucesso!\n`);
            console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".", ",")}`);
            return; // Retorna ao menu principal após realizar o depósito
        } else {
            console.log("Conta não encontrada! Tente novamente.\n"); // Mensagem para conta não encontrada
        }
    }
}

module.exports = depositar;
