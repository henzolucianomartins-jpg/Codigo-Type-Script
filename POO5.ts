class ContaBancaria {

  public titular: string;
  private saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error(`Olá, ${this.titular}. O valor do depósito precisa ser maior que zero.`);
    }

    this.saldo += valor;
    console.log(`Sucesso! Depósito de R$ ${valor.toFixed(2)} realizado na conta de ${this.titular}.`);
  }

  public consultarSaldo(): string {
    return `Olá, ${this.titular}! Seu saldo atual é de R$ ${this.saldo.toFixed(2)}.`;
  }
}

try {

  const minhaConta = new ContaBancaria("Gaybriel", 100);


  minhaConta.depositar(50); 


  console.log(minhaConta.consultarSaldo());
 
} catch (error: any) {

  console.error("Ops! Ocorreu um problema:", error.message);
}
