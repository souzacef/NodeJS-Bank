class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += this.saldo;
    }

    sacar(valor) {
        if(valor <= this.saldo) {
            this.saldo -= this.saldo;
            console.log(`Saque de ${valor} realizado com sucesso.`);
            console.log(`Saldo atual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar a operação!");
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

module.exports = Conta;