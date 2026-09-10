
  const vitrine = document.getElementById('vitrine-itens');
  const carrinho = document.getElementById('carrinho');
  const mensagemVazia = document.getElementById('mensagem-vazio');
  const contador = document.getElementById('contador');
  const botaoLimpar = document.getElementById('limpar');
 
  let itemArrastado = null;
 
  // Ativa o comportamento de arrastar em uma peça
  function ativarArraste(peca) {
    peca.addEventListener('dragstart', () => {
      itemArrastado = peca;
      peca.classList.add('arrastando');
    });
 
    peca.addEventListener('dragend', () => {
      peca.classList.remove('arrastando');
      itemArrastado = null;
    });
  }
 
  // Ativa o arraste em todas as peças que já existem na vitrine
  document.querySelectorAll('.peca').forEach(ativarArraste);
 
  // Permite soltar a peça dentro do carrinho
  carrinho.addEventListener('dragover', (evento) => {
    evento.preventDefault();
    carrinho.classList.add('sobre-arraste');
  });
 
  carrinho.addEventListener('dragleave', () => {
    carrinho.classList.remove('sobre-arraste');
  });
 
  carrinho.addEventListener('drop', (evento) => {
    evento.preventDefault();
    carrinho.classList.remove('sobre-arraste');
 
    if (itemArrastado) {
      // Move a peça da vitrine para o carrinho
      adicionarBotaoRemover(itemArrastado);
      carrinho.appendChild(itemArrastado);
      atualizarEstado();
    }
  });
 
  // Adiciona um link "remover" para poder devolver a peça à vitrine
  function adicionarBotaoRemover(peca) {
    if (peca.querySelector('.remover')) return;
 
    const remover = document.createElement('span');
    remover.textContent = 'remover';
    remover.className = 'remover';
    remover.addEventListener('click', () => {
      peca.remove();
      peca.querySelector('.remover')?.remove();
      vitrine.appendChild(peca);
      atualizarEstado();
    });
    peca.appendChild(remover);
  }
 
  // Atualiza o contador e a mensagem de carrinho vazio
  function atualizarEstado() {
    const quantidade = carrinho.querySelectorAll('.peca').length;
    contador.textContent = quantidade === 1
      ? '1 peça no carrinho'
      : quantidade + ' peças no carrinho';
    mensagemVazia.style.display = quantidade === 0 ? 'block' : 'none';
  }
 
  // Botão para esvaziar o carrinho e devolver tudo à vitrine
  botaoLimpar.addEventListener('click', () => {
    carrinho.querySelectorAll('.peca').forEach((peca) => {
      peca.querySelector('.remover')?.remove();
      vitrine.appendChild(peca);
    });
    atualizarEstado();
  });