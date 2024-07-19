//importação de dependêscias

const ContaCorrente = require("./classes/ContaCorrente");
const ContaPoupanca = require("./classes/ContaPoupanca");
const prompt = require("./utils/prompt");

const criarConta = require("./funcoes/criarConta");
const depositar = require("./funcoes/depositar");
const sacar = require("./funcoes/sacar");
const aplicarJurosOuRendimento = require("./funcoes/aplicarJurosOuRendimento");
const consultarSaldo = require("./funcoes/consultarSaldo");

const contas = []; // Array para armazenar todas as contas criadas

let continuar = true; // Flag para controlar o loop principal do menu

while (continuar) {
    // Exibe o menu principal
    console.log(`\n========== Bem vindo ao NodeJS Bank! ==========\n`);
    console.log("1 - Criar Conta");
    console.log("2 - Depósito");
    console.log("3 - Saque");
    console.log("4 - Aplicar Juros ou Rendimento");
    console.log("5 - Consultar Saldo");
    console.log("6 - Sair\n");

    const opcao = +prompt("Digite a opção desejada: "); // Solicita a opção do usuário

    switch (opcao) {
        case 1:
            criarConta(contas); // Chama a função para criar uma nova conta
            break;
        case 2:
            depositar(contas); // Chama a função para realizar um depósito
            break;
        case 3:
            sacar(contas); // Chama a função para realizar um saque
            break;
        case 4:
            aplicarJurosOuRendimento(contas); // Chama a função para aplicar juros ou rendimento
            break;
        case 5:
            consultarSaldo(contas); // Chama a função para consultar o saldo
            break;
        case 6:
            continuar = false; // Encerra o loop principal, saindo do programa
            console.log("Saindo do sistema bancário...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.\n"); // Mensagem para opção inválida
            break;
    }
}
