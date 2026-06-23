// Mapeamento: ID da notícia → ID do modal correspondente
const noticiaParaModal = {
  gta6: "modal-gta6",
  Zelda: "modal-zelda",
  gowLaufey: "modal-laufey",
  switch: "modal-switch",
};

// Abre o modal ao clicar na notícia
document.querySelectorAll(".NoticiaCaixa").forEach((noticia) => {
  noticia.addEventListener("click", () => {
    const modalId = noticiaParaModal[noticia.id];
    if (!modalId) return;

    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("ativo");
    document.body.style.overflow = "hidden"; // trava o scroll da página
  });
});

// Fecha ao clicar no botão ×
document.querySelectorAll(".fechar").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    fecharModal(btn.closest(".modal"));
  });
});

// Fecha ao clicar fora do conteúdo (no overlay escuro)
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal(modal);
    }
  });
});

// Fecha com a tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.ativo").forEach(fecharModal);
  }
});

function fecharModal(modal) {
  if (!modal) return;
  modal.classList.remove("ativo");
  document.body.style.overflow = ""; // libera o scroll
}