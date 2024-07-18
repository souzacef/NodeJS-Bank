const ContaCorrente = require("../classes/ContaCorrente");
const ContaPoupanca = require("../classes/ContaPoupanca");
const prompt = require("../utils/prompt");

function criarConta(contas) {
    console.log("\n==========Menu de criação de conta.==========\n");
    const tipoConta = +prompt("Digite 1 para Conta Corrente, 2 para Conta Poupança: ");
    const titular = prompt("Digite o nome do titular: ");
    const saldo = parseFloat(prompt("Digite o saldo inicial: ")).toFixed(2);

    if (tipoConta == 1) {
        const juros = parseFloat(prompt("Digite a taxa de juros: "));
        const novaConta = new ContaCorrente(titular, parseFloat(saldo), juros);
        contas.push(novaConta);
        console.log("Conta Corrente criada com sucesso!\n");
    } else if (tipoConta == 2) {
        const rendimento = parseFloat(prompt("Digite a taxa de rendimento: "));
        const novaConta = new ContaPoupanca(titular, parseFloat(saldo), rendimento);
        contas.push(novaConta);
        console.log("Conta Poupança criada com sucesso!\n");
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}

module.exports = criarConta;
