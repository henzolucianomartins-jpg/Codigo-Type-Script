class Aluno {

  constructor(
    public readonly nome: string,
    public nota: number
  ) {}

  get isAprovado(): string {
    return this.nota >= 6 ? "Aprovado" : "Reprovado";
  }
}

const aluno1 = new Aluno("Carlos", 7.5);
console.log(`${aluno1.nome}: ${aluno1.isAprovado}`);

const aluno2 = new Aluno("Ana", 5.0);
console.log(`${aluno2.nome}: ${aluno2.isAprovado}`);
