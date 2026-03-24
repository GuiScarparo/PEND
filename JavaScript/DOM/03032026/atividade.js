// Atividade 1
let botao = document.querySelector("#botao");
let botao2 = document.querySelector("#botao2");

botao.addEventListener("click", function () {
  let titulo = document.querySelector("#titulo");
  titulo.style.color = "blue";
});

botao2.addEventListener("click", function () {
  let titulo = document.querySelector("#titulo");
  titulo.style.color = "red";
});

// Atividade 2

let mostrar = document.querySelector("#mostrar");
mostrar.addEventListener("click", function () {
  oculto.classList.toggle("mensagem");
});

// Atividade 3

let input = document.querySelector("#input");
let contador = document.querySelector("#contador");

input.addEventListener("input", () => {
  contador.textContent = input.value.length;
});

//atividade 4

let clickbutton = document.querySelector("#clickbutton");
let contadorCliques = document.querySelector("#contadorCliques");

clickbutton.addEventListener("click", () => {
  let contador = parseInt(contadorCliques.textContent);
  contador++;
  contadorCliques.textContent = contador;
});

//atividade 5
let lista = document.querySelector("#lista");
let menlista = document.querySelector("#menlista");
let adicionar = document.querySelector("#adicionar");
adicionar.addEventListener("click", function () {
  let item = document.createElement("li");
  item.textContent = menlista.value;
  document.querySelector("#lista").appendChild(item);
  //atividade 6 e desafio extra
  item.addEventListener("click", function () {
    let promptResult = prompt("Deseja remover este item? (sim/não)");
    if (promptResult === "sim") {
      lista.removeChild(item);
    } else {
      alert("Item não removido.");
    }
  });
});

//atividade HARD
let mandar = document.querySelector("#mandar");
let nomeInput = document.querySelector("#nome");
let mostrarNome = document.querySelector("#mostarNome");

mandar.addEventListener("click", function () {
  let nome = nomeInput.value;
  if (nome === "") {
    document.querySelector("#mostarNome").innerHTML =
      "<p class='erro'>O campo nome é obrigatório</p>";
  } else if (nome === " ") {
    document.querySelector("#mostarNome").innerHTML =
      "<p class='erro'>O campo nome é obrigatório</p>";
  } else if (nome === "\S" + " " + "\S") {
    document.querySelector("#mostarNome").innerHTML =
      "<p class='sucesso'>Nome enviado com sucesso!</p>";
  } else {
    document.querySelector("#mostarNome").innerHTML =
      "<p class='sucesso'>Nome enviado com sucesso!</p>";
  }
});

//exercicio validação de campos

let enviarEmail = document.querySelector("#enviarEmail");
let emailInput = document.querySelector("#email");
let mostrarEmail = document.querySelector("#mostrarEmail");
let senhaInput = document.querySelector("#senha");
let mostrarSenha = document.querySelector("#mostrarSenha");

senhaInput.addEventListener("input", function () {
  let contaSenha = senhaInput.value.length;
  if (contaSenha < 6) {
    mostrarSenha.innerHTML = "<p class='erro'>Senha fraca</p>";
  } else if (contaSenha >= 6 && contaSenha < 10) {
    mostrarSenha.innerHTML = "<p class='passou'>Senha aceitavel</p>";
  } else {
    mostrarSenha.innerHTML = "<p class='sucesso'>Senha forte</p>";
  }
});

enviarEmail.addEventListener("click", function () {
  contaSenha = senhaInput.value.length;
  let email = emailInput.value;
  let arroba = email.indexOf("@");
  let ponto = email.lastIndexOf(".");
  let emailValido =
    arroba > 0 && ponto > arroba + 1 && ponto < email.length - 1;
  let senhaValida = contaSenha >= 6;
  if (emailValido && senhaValida) {
    document.querySelector("#mostrarEmail").innerHTML =
      "<p class='sucesso'>Email e senha enviados   com sucesso!</p>";
    return true;
  } else {
    if (emailValido === false && senhaValida === false) {
      document.querySelector("#mostrarEmail").innerHTML =
        "<p class='erro'>Email e senha inválidos, verifique os campos e tente novamente.</p>";
      return false;
    }
    if (senhaValida === false) {
      document.querySelector("#mostrarEmail").innerHTML =
        "<p class='erro'>senha fraca, digite uma senha com pelo menos 6 caracteres.</p>";
      return false;
    } else {
      document.querySelector("#mostrarEmail").innerHTML =
        "<p class='erro'>Email inválido, email sem @ ou ponto pós arroba</p>";
      return false;
    }
  }
});
