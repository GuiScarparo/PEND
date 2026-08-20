class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
    AplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoComDesconto;
    }

    Exibir(){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = `
            <div>
                <p>Nome: ${this.nome}</p>
                <p>Preço: ${this.AplicarDesconto()}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
            </div>
        `;
    }
}
const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const BotaoCadastro = document.querySelector('#BotaoCadastrar');

BotaoCadastro.addEventListener('click', function() {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    produto.AplicarDesconto();
    localStorage.setItem('produto', JSON.stringify(produto));
    produto.Exibir();
});

const dados = localStorage.getItem('produto');
if (dados) {
    const produtoSalvo = JSON.parse(dados);
    const produto = new Produto(produtoSalvo.nome, produtoSalvo.preco, produtoSalvo.categoria, produtoSalvo.desconto);
    produto.Exibir();
}