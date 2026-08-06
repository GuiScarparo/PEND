//Exercício 2 - POO 


class Produto{
    constructor(nome, preco, estoque){
    
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    Vender(){
        return(`O produto ${this.nome} está sendo vendido por R$ ${this.preco.toFixed(2)}`);
    }

    Repor(){
        return(`O produto ${this.nome} está sendo reposto no estoque, atualmente temos ${this.estoque} unidades`);
    }
    AlterarPreco(){
        return(`O produto ${this.nome} está tendo seu preço alterado`);
    }
}

const produto1 = new Produto("Notebook", 3500.00, 10);
const produto2 = new Produto("Mouse", 50.00, 50);
const produto3 = new Produto("Teclado", 100.00, 30);
const produtoEspecial = new Produto("Traje Homem-Aranha", 100000.00, 1);

console.log("|-----------------------------------|")
console.log(produto1.Vender());
console.log(produto1.Repor());
console.log(produto1.AlterarPreco());
console.log("|-----------------------------------|")
console.log(produto2.Vender());
console.log(produto2.Repor());
console.log(produto2.AlterarPreco());
console.log("|-----------------------------------|")
console.log(produto3.Vender());
console.log(produto3.Repor());
console.log(produto3.AlterarPreco());
console.log("|-----------------------------------|")
console.log(produtoEspecial.Vender());
console.log(produtoEspecial.Repor());
console.log(produtoEspecial.AlterarPreco());
console.log("|-----------------------------------|")