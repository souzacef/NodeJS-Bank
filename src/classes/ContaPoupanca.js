const Conta = require("./Conta");

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento) {
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento;
    }
}

module.exports = ContaPoupanca;
