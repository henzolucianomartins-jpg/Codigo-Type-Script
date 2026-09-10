class Pessoa {
    constructor(public nome: string, public idade: number) {}
}

const cliente = new Pessoa("Lucas", 22);

console.log(`Nome: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade} anos`);
