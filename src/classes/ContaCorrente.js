const Conta = require("./Conta");

class ContaCorrente extends Conta{
    constructor(titular, saldo, juros) {
        super(titular, saldo)
        this.juros = juros;
    }

    aplicarJuros() {
        this.saldo += this.saldo * this.juros;
    }
}

module.exports = ContaCorrente;