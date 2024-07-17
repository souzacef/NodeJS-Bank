const prompt = require("prompt-sync");
const Conta = require("./Conta");
const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./Contapoupanca");

const contas = [];

function criarConta() {
    console.log("\n==========Menu de criação de conta.==========\n");
    const tipoConta = +prompt("Digite 1 para Conta Corrente, 2 para Conta Poupança ");
    const titular = prompt("Digite o nome do titular.");
    const saldo = parseFloat(+prompt("Digite o saldo inicial")).toFixed(2)

    if (tipoConta == 1){
        const juros = parseFloat(prompt("Digite a taxa de juros "))
        const novaConta = new ContaCorrente(titular, saldo, juros);
        contas.push(novaConta);
        console.log("Conta Corrente criada com sucesso!\n");
    } else if (tipoConta == 2) {
        const rendimento = parseFloat(prompt("Digite a taxa de rendimento"));
        const novaConta = new ContaPoupanca(titular, saldo, rendimento);
        contas.push(novaConta);
        console.log("Conta Poupança criada com sucesso!\n")
    } else{
        console.log("Opção inválida. Tente novamente. ")
    }
}

function depositar() {
    console.log("\n==========Menu de depósito.==========\n");
    const titular = prompt("Digite o nome do titular. ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        const valor = parseFloat(prompt("Digite o valor a ser depositado. ")).toFixed(2);
        conta.depositar(valor);
        console.log(`Depósito de R$ ${valor} realizado com sucesso!\n`);
    } else {
        console.log("Conta não encontrada! ");
    }
}

function sacar() {
    console.log("\n==========Menu de Saque.==========\n");
    const titular = prompt("Digite o nome do titular. ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        const valor = parseFloat(prompt("Digite o valor a ser sacado. ")).toFixed(2);
        conta.sacar(valor);
    } else {
        console.log("Conta não encontrada! ");
    }
}

function aplicarJurosOuRendimento() {
    console.log("\n==========Menu de Juros e Rendimento.==========\n");
    const titular = prompt("Digite o nome do titular. ");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        if (conta instanceof ContaCorrente) {
            conta.aplicarJuros();
            console.log("Juros aplicados com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${getSaldo()}`);
        }
    } else if (conta instanceof ContaPoupanca) {
            conta.aplicarRendimento();
            console.log("Rendimento aplicado com sucesso!\n");
            console.log(`Saldo atualizado: R$ ${getSaldo()}`);
    } else {
        console.log("Conta não encontrada!\n");
    }
}

function consultaSaldo() {
    console.log("\n==========Consultar Saldo.==========\n");
    const titular = prompt ("Digite o nome do titular");
    const conta = contas.find(c => c.titular === titular);

    if (conta) {
        console.log(`O saldo atual de ${titular} é: R$ ${saldo}\n`);
    } else {
        console.log("Conta não encontrada!\n");
    }
}