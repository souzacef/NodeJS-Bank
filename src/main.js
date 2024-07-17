const ContaCorrente = require("./classes/ContaCorrente");
const ContaPoupanca = require("./classes/ContaPoupanca");
const Conta = require("./classes/Conta");
const prompt = require("./utils/prompt");

let continuar = true;

while (continuar) {
    console.log(`\n==========Bem vindo ao NodeJS Bank!==========\n`);
    console.log("1 - Criar Conta");
    console.log("2 - Depósito");
    console.log("3 - Saque");
    console.log("4 - Aplicar Juros ou Rendimento");
    console.log("5 - Consultar Saldo");
    console.log("6 - Sair");

    const opcao = +prompt("Digite a opção desejada");

    switch (opcao){
        case 1:
            criarConta();
            break;
        case 2:
            deposito();
            break;
        case 3:
            sacar();
            break;
        case 4:
            aplicarJurosOuRendimento();
            break;
        case 5:
            consultarSaldo();
            break;
        case 6:
            continuar = false;
            console.log("Saindo do sistema bancario...");
            break
        default:
            console.log("Opção inválida! Tente novamente.\n");
            break;
    }
}