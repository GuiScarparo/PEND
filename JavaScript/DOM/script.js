let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    alert("olá, DOM!");
    let titulo = document.querySelector("#titulo");
    titulo.textContent = "Título atualizado via JavaScript";
    titulo.style.color = "blue";
    titulo.style.fontSize = "32px";
    document.getElementById("minhaImagem").style.display = "block";
    let botao = document.querySelector("#botao");
    botao.setAttribute("disabled", "true");
});

