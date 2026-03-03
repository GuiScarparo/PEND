document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (codigo HTML = innerHTML)</p>";

document.getElementById("mensagem").textContent = "texto simples, sem HTML (textContent)";

document.getElementById("foto").setAttribute("src", "https://i.pinimg.com/736x/0f/53/af/0f53af2b64cc982ceeadf0b794beee81.jpg");

let url = document.getElementById("link").getAttribute("href");

console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");

document.getElementById('alerta').classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo criado com JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("lista2").removeChild(item);