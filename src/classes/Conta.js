class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`\nSaque de R$ ${valor} realizado com sucesso. `);
            console.log(`Saldo atual: R$ ${this.saldo}\n`);
        } else {
            console.log("Saldo insuficiente para realizar a operação!");
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

module.exports = Conta;
