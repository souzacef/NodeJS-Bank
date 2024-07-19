const Conta = require("./Conta");

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento) {
        super(titular, saldo); // Chama o construtor da classe base Conta
        this.rendimento = rendimento; // Taxa de rendimento específica da conta poupança
    }

    aplicarRendimento() {
        this.saldo += (this.saldo * this.rendimento) / 100; // Aplica a taxa de rendimento ao saldo
    }
}

module.exports = ContaPoupanca;
