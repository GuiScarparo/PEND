const nome = document.querySelector('#nome');
const botaoSalvar = document.querySelector('#salvar');
const botaoRecuperar = document.querySelector('#recuperar');
const botaoExcluir = document.querySelector('#excluir');

const resultado = document.querySelector('#resultado');

botaoSalvar.addEventListener('click', function() {
    localStorage.setItem('nome', nome.value);
    resultado.textContent = 'Nome salvo!';
});

botaoRecuperar.addEventListener('click', function() {
    const nomeSalvo = localStorage.getItem('nome');
    if (nomeSalvo) {
        resultado.textContent = `Nome recuperado: ${nomeSalvo}`;
    } else {
        resultado.textContent = 'Nenhum nome encontrado.';
    }
});

botaoExcluir.addEventListener('click', function() {
    localStorage.removeItem('nome');
    resultado.textContent = 'Nome excluído!';
});