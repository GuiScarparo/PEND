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
}
class Estoque{
    constructor(){
        const produtosSalvos = JSON.parse(localStorage.getItem('Produtos')) || [];
        this.Produtos = produtosSalvos.map(produto => new Produto(
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.desconto
        ));
    }
    Adicionar(produto){
        this.Produtos.push(produto);
        localStorage.setItem('Produtos', JSON.stringify(this.Produtos));
    }
    Remover(index){
        this.Produtos.splice(index, 1);
        localStorage.setItem('Produtos', JSON.stringify(this.Produtos));
    }
    Exibir(){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        this.Produtos.forEach((produto, index) => {
            resultado.innerHTML += `
            <div>
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.AplicarDesconto()}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}%</p>
                <button class="btn-excluir" data-index="${index}">Excluir</button>
            </div>
            `;
        });
    }
}
const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const BotaoCadastro = document.querySelector('#BotaoCadastrar');
const estoque = new Estoque();
estoque.Exibir();

resultado.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('btn-excluir')) {
        const index = Number(e.target.dataset.index);
        if (!Number.isNaN(index)) {
            estoque.Remover(index);
            estoque.Exibir();
        }
    }
});

BotaoCadastro.addEventListener('click', function() {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    estoque.Adicionar(produto);
    console.log(estoque.Produtos);
    produto.AplicarDesconto();
    estoque.Exibir();
});