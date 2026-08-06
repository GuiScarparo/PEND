//classe
class carro{
    //atributos da classe
    // o constructor é o método que é chamado quando um objeto da classe é criado
    constructor(marca, modelo, ano, cor){
    this.marca=marca; //o this é usado para referenciar o objeto atual da classe
    this.modelo=modelo;
    this.ano=ano;
    this.cor=cor;
    }

    Ligar(){
        return(`O ${this.marca} ${this.modelo} do ano de ${this.ano} com a cor ${this.cor} está ligado`);
    }
    Desligar(){
        return(`O ${this.marca} ${this.modelo} do ano de ${this.ano} com a cor ${this.cor} está desligado`);
    }
    Acelerar(){
        return(`O ${this.marca} ${this.modelo} do ano de ${this.ano} com a cor ${this.cor} está acelerando`);
    }
    Frear(){
        return(`O ${this.marca} ${this.modelo} do ano de ${this.ano} com a cor ${this.cor} está freando`);
    }

}

const carro1 = new carro("Nissan", "Silvia S14", 1994, "Vermelho"); //criando um objeto da classe carro
const carro2 = new carro("Honda", "Integra Type-R", 1995, "Preto"); //criando um objeto da classe carro
const carro3 = new carro("Toyota", "Century", 1997, "Branco"); //criando um objeto da classe carro
const carro4 = new carro("Gordon MUrray", "t50", 2020,"preto fosco")

console.log("carro1: ", carro1);
console.log("carro2: ", carro2);
console.log("carro3: ", carro3);

console.log("----------------------------------------");

console.log("Atributos do carro1:");
console.log("Marca: ", carro1.marca);
console.log("Modelo: ", carro1.modelo);
console.log("Ano: ", carro1.ano);
console.log("Cor: ", carro1.cor);
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log("Atributos do carro2:");
console.log("Marca: ", carro2.marca);
console.log("Modelo: ", carro2.modelo);
console.log("Ano: ", carro2.ano);
console.log("Cor: ", carro2.cor);
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log("Atributos do carro3:");
console.log("Marca: ", carro3.marca);
console.log("Modelo: ", carro3.modelo);
console.log("Ano: ", carro3.ano);
console.log("Cor: ", carro3.cor);
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log("Atributos do carro4:");
console.log("Marca: ", carro4.marca);
console.log("Modelo: ", carro4.modelo);
console.log("Ano: ", carro4.ano);
console.log("Cor: ", carro4.cor);
console.log("----------------------------------------");

console.log("O carro1 está: ", carro1.Ligar());
console.log("O carro1 está: ", carro1.Acelerar());
console.log("O carro1 está: ", carro1.Frear());
console.log("O carro1 está: ", carro1.Desligar());

console.log("O carro2 está: ", carro2.Ligar());
console.log("O carro2 está: ", carro2.Acelerar());
console.log("O carro2 está: ", carro2.Frear());
console.log("O carro2 está: ", carro2.Desligar());

console.log("O carro3 está: ", carro3.Ligar());
console.log("O carro3 está: ", carro3.Acelerar());
console.log("O carro3 está: ", carro3.Frear());
console.log("O carro3 está: ", carro3.Desligar());

console.log("O carro4 está: ", carro4.Ligar());
console.log("O carro4 está: ", carro4.Acelerar());
console.log("O carro4 está: ", carro4.Frear());
console.log("O carro4 está: ", carro4.Desligar());