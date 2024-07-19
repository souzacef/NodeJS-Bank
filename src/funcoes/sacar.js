const prompt = require("../utils/prompt");

function sacar(contas) {
    while (true) {
        console.log("\n========== Saque ==========\n");
        const titular = prompt("Digite o nome do titular (ou 0 para voltar): ").toLowerCase(); // Solicita o nome do titular

        if (titular === "0") return; // Retorna ao menu principal se o usuário digitar 0

        const conta = contas.find(c => c.titular.toLowerCase() === titular); // Procura a conta pelo titular

        if (conta) {
            let valor = "";
            while (true) {
                valor = prompt("Digite o valor do saque: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(valor) || parseFloat(valor) <= 0) {
                    console.log('O valor do saque deve ser um número positivo e válido.'); // Validação do valor do saque
                } else if (parseFloat(valor) > conta.getSaldo()) {
                    console.log('Saldo insuficiente. Tente um valor menor.'); // Verificação de saldo insuficiente
                } else {
                    valor = parseFloat(valor).toFixed(2);
                    break;
                }
            }
            conta.sacar(parseFloat(valor)); // Realiza o saque na conta
            console.log(`Saque de R$ ${valor.replace(".", ",")} realizado com sucesso!\n`);
            console.log(`Saldo atualizado: R$ ${conta.getSaldo().toFixed(2).replace(".", ",")}`);
            return; // Retorna ao menu principal após realizar o saque
        } else {
            console.log("Conta não encontrada! Tente novamente.\n"); // Mensagem para conta não encontrada
        }
    }
}

module.exports = sacar;
