class Retangulo {

  constructor(
    public readonly largura: number,
    public readonly altura: number
  ) {
    if (largura <= 0 || altura <= 0) {
      throw new Error("As dimensões do retângulo devem ser maiores que zero.");
    }
  }

  get perimetro(): number {
    return 2 * (this.largura + this.altura);
  }

  get area(): number {
    return this.largura * this.altura;
  }

  toString(): string {
    return `Retângulo de ${this.largura}x${this.altura} (Área: ${this.area} | Perímetro: ${this.perimetro})`;
  }
}

try {
  const meuRetangulo = new Retangulo(5, 10);
  
  console.log(meuRetangulo.toString());
  console.log(`Apenas o perímetro: ${meuRetangulo.perimetro}`);
} catch (erro) {
  console.error((erro as Error).message);
}
