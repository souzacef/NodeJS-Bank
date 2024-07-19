const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");
const prompt = require("../utils/prompt");

function criarConta(contas) {
    while (true) {
        console.log("\n========== Menu de criação de conta ==========\n");
        const tipoConta = +prompt("Digite 1 para Conta Corrente, 2 para Conta Poupança (ou 0 para voltar): ");

        if (tipoConta === 0) return; // Retorna ao menu principal se o usuário digitar 0

        if (tipoConta !== 1 && tipoConta !== 2) {
            console.log("Opção inválida. Tente novamente."); // Mensagem para opção inválida
            continue;
        }

        let titular = "";
        while (true) {
            titular = prompt("Digite o nome do titular: ");
            if (!/^[A-Za-z\s]+$/.test(titular)) {
                console.log("Titular deve conter apenas letras e espaços."); // Validação do nome do titular
            } else if (contas.some(c => c.titular.toLowerCase() === titular.toLowerCase())) {
                console.log("Já existe uma conta com esse titular. Tente um nome diferente."); // Verifica se já existe uma conta com o mesmo titular
            } else {
                break;
            }
        }

        let saldo = "";
        while (true) {
            saldo = prompt("Digite o saldo inicial: ").replace(",", ".");
            if (!/^\d+(\.\d{1,2})?$/.test(saldo) || parseFloat(saldo) < 0) {
                console.log('O saldo inicial deve ser um número positivo e válido.'); // Validação do saldo inicial
            } else {
                saldo = parseFloat(saldo).toFixed(2);
                break;
            }
        }

        if (tipoConta === 1) {
            let juros = "";
            while (true) {
                juros = prompt("Digite a taxa de juros: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(juros) || parseFloat(juros) <= 0) {
                    console.log('A taxa de juros deve ser um número positivo e válido.'); // Validação da taxa de juros
                } else {
                    juros = parseFloat(juros).toFixed(2);
                    break;
                }
            }
            const novaConta = new ContaCorrente(titular, parseFloat(saldo), parseFloat(juros));
            contas.push(novaConta); // Adiciona a nova conta corrente à lista de contas
            console.log("Conta Corrente criada com sucesso!\n");
        } else if (tipoConta === 2) {
            let rendimento = "";
            while (true) {
                rendimento = prompt("Digite a taxa de rendimento: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(rendimento) || parseFloat(rendimento) <= 0) {
                    console.log('A taxa de rendimento deve ser um número positivo e válido.'); // Validação da taxa de rendimento
                } else {
                    rendimento = parseFloat(rendimento).toFixed(2);
                    break;
                }
            }
            const novaConta = new ContaPoupanca(titular, parseFloat(saldo), parseFloat(rendimento));
            contas.push(novaConta); // Adiciona a nova conta poupança à lista de contas
            console.log("Conta Poupança criada com sucesso!\n");
        }
        return; // Retorna ao menu principal após criar a conta
    }
}

module.exports = criarConta;
