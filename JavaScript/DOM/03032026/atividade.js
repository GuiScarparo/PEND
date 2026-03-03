let botao = document.querySelector("#botao");
let botao2 = document.querySelector("#botao2");

botao.addEventListener("click", function() {
    let titulo = document.querySelector("#titulo");
    titulo.style.color = "blue";
});

botao2.addEventListener("click", function() {
    let titulo = document.querySelector("#titulo");
    titulo.style.color = "red";
});