class Produto {

    constructor(
        public readonly nome: string,
        public readonly preco: number,
        public estoque: number
    ) {}

    exibirDetalhes(numeroProduto: number): void {
        console.log(`--- Produto ${numeroProduto} ---`);
        console.log(`Item: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Disponível: ${this.estoque} unidades\n`);
    }
}

const produto1 = new Produto("Notebook Nitro V", 4599.90, 15);
const produto2 = new Produto("Mouse Gamer Sem Fio", 249.00, 42);

produto1.exibirDetalhes(1);
produto2.exibirDetalhes(2);
