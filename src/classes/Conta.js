class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += this.valor;
    }

    sacar(valor) {
        if(valor <= this.saldo) {
            this.saldo -= this.valor;
            console.log(`Saque de R% ${valor} realizado com sucesso.`);
            console.log(`Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar a operação!");
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

module.exports = Conta;