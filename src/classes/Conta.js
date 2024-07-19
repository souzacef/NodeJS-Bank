class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular; // Nome do titular da conta
        this.saldo = saldo; // Saldo inicial da conta
    }

    depositar(valor) {
        this.saldo += valor; // Adiciona o valor ao saldo da conta
    }

    sacar(valor) {
        this.saldo -= valor; // Subtrai o valor do saldo da conta
    }

    getSaldo() {
        return this.saldo; // Retorna o saldo atual da conta
    }
}

module.exports = Conta;
