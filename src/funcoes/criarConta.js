const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");
const prompt = require("../utils/prompt");

function criarConta(contas) {
    while (true) {
        console.log("\n==========Menu de criação de conta.==========\n");
        const tipoConta = +prompt("Digite 1 para Conta Corrente, 2 para Conta Poupança, 0 para Voltar ao Menu: ");
        
        if (tipoConta === 0) return;

        if (![1, 2].includes(tipoConta)) {
            console.log("Opção inválida. Tente novamente.");
            continue;
        }

        let titular;
        while (true) {
            titular = prompt("Digite o nome do titular: ");
            if (!/^[A-Za-z\s]+$/.test(titular)) {
                console.log('Titular deve conter apenas letras e espaços.');
                continue;
            }
            if (contas.some(c => c.titular === titular)) {
                console.log('Já existe uma conta com esse titular.');
                continue;
            }
            break;
        }

        let saldo;
        while (true) {
            saldo = prompt("Digite o saldo inicial: ").replace(",", ".");
            if (!/^\d+(\.\d{1,2})?$/.test(saldo) || parseFloat(saldo) < 0) {
                console.log('Saldo inicial deve ser um número não negativo e válido.');
                continue;
            }
            saldo = parseFloat(saldo).toFixed(2);
            break;
        }

        if (tipoConta === 1) {
            let juros;
            while (true) {
                juros = prompt("Digite a taxa de juros: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(juros) || parseFloat(juros) < 0) {
                    console.log('A taxa de juros deve ser um número não negativo e válido.');
                    continue;
                }
                juros = parseFloat(juros);
                break;
            }
            const novaConta = new ContaCorrente(titular, parseFloat(saldo), juros);
            contas.push(novaConta);
            console.log("Conta Corrente criada com sucesso!\n");
        } else if (tipoConta === 2) {
            let rendimento;
            while (true) {
                rendimento = prompt("Digite a taxa de rendimento: ").replace(",", ".");
                if (!/^\d+(\.\d{1,2})?$/.test(rendimento) || parseFloat(rendimento) < 0) {
                    console.log('A taxa de rendimento deve ser um número não negativo e válido.');
                    continue;
                }
                rendimento = parseFloat(rendimento);
                break;
            }
            const novaConta = new ContaPoupanca(titular, parseFloat(saldo), rendimento);
            contas.push(novaConta);
            console.log("Conta Poupança criada com sucesso!\n");
        }
        break;
    }
}

module.exports = criarConta;
