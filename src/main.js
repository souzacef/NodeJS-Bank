const ContaCorrente = require("./classes/ContaCorrente");
const ContaPoupanca = require("./classes/ContaPoupanca");
const prompt = require("./utils/prompt");

const criarConta = require("./funcoes/criarConta");
const depositar = require("./funcoes/depositar");
const sacar = require("./funcoes/sacar");
const aplicarJurosOuRendimento = require("./funcoes/aplicarJurosOuRendimento");
const consultarSaldo = require("./funcoes/consultarSaldo");

const contas = [];

let continuar = true;

while (continuar) {
    console.log(`\n==========Bem vindo ao NodeJS Bank!==========\n`);
    console.log("1 - Criar Conta");
    console.log("2 - Depósito");
    console.log("3 - Saque");
    console.log("4 - Aplicar Juros ou Rendimento");
    console.log("5 - Consultar Saldo");
    console.log("6 - Sair");

    const opcao = +prompt("Digite a opção desejada: ");

    switch (opcao) {
        case 1:
            criarConta(contas);
            break;
        case 2:
            depositar(contas);
            break;
        case 3:
            sacar(contas);
            break;
        case 4:
            aplicarJurosOuRendimento(contas);
            break;
        case 5:
            consultarSaldo(contas);
            break;
        case 6:
            continuar = false;
            console.log("Saindo do sistema bancário...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.\n");
            break;
    }
}
