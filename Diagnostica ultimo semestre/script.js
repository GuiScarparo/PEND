const formulario = document.querySelector("#formulario");
const mensagem = document.querySelector("#mensagem");


formulario.addEventListener("submit", function (event) {

event.preventDefault(); 

//Variavel do nome //////////
let nome = document.querySelector("#nome");
/////////////////////////////
//Variavel do email //////////
let email = document.querySelector("#email");
/////////////////////////////
//Variavel do numero //////////
let numero = document.querySelector("#numero");
/////////////////////////////



//Validação do nome

  if (nome.value === "" || nome.value === " "){
    mensagem.innerHTML = "<p class='Erro'>O campo nome é obrigatório</p>";
    return;
  }

  //Verifica se o campo Nome está vazio ou contém apenas espaços em branco, e exibe uma mensagem de erro ou sucesso de acordo com a validação.

  //Validação do email

  let validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex para validar o formato do email

  if (validaEmail.test(email.value)) {
  } else if (email.value === "") {
    mensagem.innerHTML = "<p class='Erro'>O campo email é obrigatório</p>";
  } else if (email.value === " ") {
    mensagem.innerHTML = "<p class='Erro'>O campo email é obrigatório</p>";
  } else {
    mensagem.innerHTML =
      "<p class='Erro'>Email inválido, email sem @ ou ponto pós arroba</p>";
      return;
  }


    //Verificação de telefone
  let TelGEx = /^\(\d{2}\)\d{5}-\d{4}$/;

  if (TelGEx.test(numero.value)) {
  } else {
    mensagem.innerHTML = "<p class='Erro'>telefone não aceito</p>";
    return;
  }

  //verifica se o telefone tem o formato (xx)xxxxx-xxxx, onde x é um numero, e exibe uma mensagem de erro ou sucesso de acordo com a validação

mensagem.textContent = "Formulário enviado com sucesso, entrarei em contato com você em breve!";
mensagem.className= "Entrarei em contato com você em breve!";

});