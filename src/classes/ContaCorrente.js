const Conta = require("./Conta");

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros) {
        super(titular, saldo); // Chama o construtor da classe base Conta
        this.juros = juros; // Taxa de juros específica da conta corrente
    }

    aplicarJuros() {
        this.saldo += (this.saldo * this.juros) / 100; // Aplica a taxa de juros ao saldo
    }
}

module.exports = ContaCorrente;
