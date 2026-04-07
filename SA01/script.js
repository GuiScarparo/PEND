//let do Botão final

let botao = document.querySelector("#cadastrar");

/////////////////////////////////////////////////

//variaveis nome
let nome = document.querySelector("#nome");
let MenNome = document.querySelector("#MenNome");

/////////////////////////////////////////////////

//variaveis do email
let email = document.querySelector("#email");
let MenEmail = document.querySelector("#MenEmail");

/////////////////////////////////////////////////

//variaveis da senha

let senha = document.querySelector("#senha");
let MenSenha = document.querySelector("#MenSenha");

/////////////////////////////////////////////////

//variaveis da confirmação de senha
let ConfirmaSenha = document.querySelector("#confirmar");
let MenConfirma = document.querySelector("#MenConfirma");

/////////////////////////////////////////////////

//variaveis para ver a senha
let botaoSenha = document.querySelector("#botaoSenha");
let boraoSenha2 = document.querySelector("#botaoSenha2");

/////////////////////////////////////////////////

//variaveis do CEP
let endereco = document.querySelector("#CEP");
let MenCep = document.querySelector("#MenCEP");

///////////////////////////////////////////////////

//variaveis do telefone
let tel = document.querySelector("#telefone");
let MenTel = document.querySelector("#MenTelefone");

let botaoTel = document.querySelector("#AddTel");
let lista = document.querySelector("#ListaTel");

/////////////////////////////////////////////////

botao.addEventListener("click", function () {
  //Validação do nome

  if (nome.value === "" || nome.value === " ")
    MenNome.innerHTML = "<p class='Erro'>O campo nome é obrigatório</p>";
  else {
    MenNome.innerHTML = "<p class='Sucesso'>Nome enviado com sucesso!</p>";
  }
  //Verifica se o campo Nome está vazio ou contém apenas espaços em branco, e exibe uma mensagem de erro ou sucesso de acordo com a validação.

  //Validação do email

  let validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex para validar o formato do email

  if (validaEmail.test(email.value)) {
    MenEmail.innerHTML = "<p class='Sucesso'>Email enviado com sucesso!</p>";
  } else if (email.value === "") {
    MenEmail.innerHTML = "<p class='Erro'>O campo email é obrigatório</p>";
  } else if (email.value === " ") {
    MenEmail.innerHTML = "<p class='Erro'>O campo email é obrigatório</p>";
  } else {
    MenEmail.innerHTML =
      "<p class='Erro'>Email inválido, email sem @ ou ponto pós arroba</p>";
  }

  // valida se o campo email está vazio ou contém algum caracter, e se ele esta de acordo com o regex para dar uma mensagem de erro ou sucesso ao clicar o botão 

  /////////////////////////////////////////////////

  //Verificação do CEP
  let CEPGEX = /^\d{5}-\d{3}$/;
  if (CEPGEX.test(endereco.value)) {
    MenCep.innerHTML = "<p class='Sucesso'>CEP aceito</p>";
  } else {
    MenCep.innerHTML = "<p class='Erro'>CEP não aceito</p>";
  }

  //verifica se o CEP tem 5 digitos antes do hifen e 3 depois dele e exibe uma mensagem de erro ou sucesso de acordo com a validação

  /////////////////////////////////////////////////

  //Verificação de telefone
  let TelGEx = /^\(\d{2}\)\d{5}-\d{4}$/;

  if (TelGEx.test(tel.value)) {
    MenTel.innerHTML = "<p class='Sucesso'>telefone aceito</p>";
  } else {
    MenTel.innerHTML = "<p class='Erro'>telefone não aceito</p>";
  }

  //verifica se o telefone tem o formato (xx)xxxxx-xxxx, onde x é um numero, e exibe uma mensagem de erro ou sucesso de acordo com a validação
});

/////////////////////////////////////////////////

//validação senha

senha.addEventListener("keyup", function () {
  TerSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{7,}$/; //validar se a senha tem pelo menos 1 letra maiuscula e uma minuscula e pelo menos 1 numero e o minimo de 7 caracteres

  ContaSenha = senha.value.length;
  if (ContaSenha < 6 && !TerSenha.test(senha.value)) {
    MenSenha.innerHTML =
      "<p class='Erro'> Senha Fraca, deve ter pelo menos 7 caracteres contendo letras maiusculas e minuscula e numero</p> ";
  } else if (
    ContaSenha >= 6 &&
    ContaSenha < 10 &&
    !TerSenha.test(senha.value)
  ) {
    MenSenha.innerHTML = "<p class='Erro'> Senha Fraca</p>";
  } else if (ContaSenha >= 7 && ContaSenha < 10 && TerSenha.test(senha.value)) {
    MenSenha.innerHTML = "<p class='Mid'> Senha mediana</p>";
  } else if (ContaSenha >= 10 && !TerSenha.test(senha.value)) {
    MenSenha.innerHTML =
      "<p class='Erro'> Senha fraca, falta letras maiuscular ou minuscular, ou numeros</p>";
  } else if (ContaSenha >= 10 && TerSenha.test(senha.value)) {
    MenSenha.innerHTML = "<p class='Sucesso'> Senha forte</p>";
  }

  //valida se a senha tem a quantidade minima de caracteres, se contém ao menos 1 letra maiuscula, 1 minuscula e 1 numero, e exibe uma mensagem de acordo com a força da senha, se ela é fraca, mediana ou forte, ou se falta algum dos requisitos para ser considerada forte 
});

ConfirmaSenha.addEventListener("keyup", function () { // valida se a senha digitada no campo de confirmação de senha é igual a senha digitada no campo de senha, e exibe uma mensagem de erro ou sucesso de acordo com a validação
  if (ConfirmaSenha.value === senha.value) {
    MenConfirma.innerHTML = "<p class='Sucesso'>senhas iguais</p>";
  } else {
    MenConfirma.innerHTML = "<p class='Erro'>senhas não são iguais</p>";
  }
});

/////////////////////////////////////////////////

//mostrar a senha 1

botaoSenha.addEventListener("click", function () { // evento de click para mostrar ou ocultar a senha digitada no campo de senha, verificando o tipo do input e alterando ele para text ou password, e também alterando o icone do botão para indicar se a senha esta visivel ou oculta
  if (senha.type === "password") {
    senha.setAttribute("type", "text");
    botaoSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    senha.setAttribute("type", "password");
    botaoSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});

/////////////////////////////////////////////////

//mostrar senha 2
botaoSenha2.addEventListener("click", function () { //mesma função do botão de mostrar senha 1, mas para o campo de confirmação de senha, para mostrar ou ocultar a senha digitada nesse campo
  if (ConfirmaSenha.type === "password") {
    ConfirmaSenha.setAttribute("type", "text");
    botaoSenha2.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    ConfirmaSenha.setAttribute("type", "password");
    botaoSenha2.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});

/////////////////////////////////////////////////

//adicionar novo numero

botaoTel.addEventListener("click", function () { //evento de click para adicionar um novo numero a lista, criando os elementos necessários e adicionando um botão para remover o numero adicionado
  /////////////////////////////////////////////////
  //variaveis para criar os elementos do novo numero
  let Tel = document.createElement("li");
  let NTEl = document.createElement("input");
  let BotaoRe = document.createElement("button");
  /////////////////////////////////////////////////
  //atributos para os elementos criados
  NTEl.type = "text";
  NTEl.placeholder = "(xx)xxxxx-xxxx";
  BotaoRe.textContent = "Remover";
  lista.appendChild(Tel);
  Tel.appendChild(NTEl);
  Tel.appendChild(BotaoRe);
  ///////////////////////////////////////////////
  //evento de click para o botão de remover, que exibe uma caixa de confirmação para o usuario, e se ele confirmar a remoção do numero, o elemento do numero é removido da lista, caso contrario, uma mensagem de alerta é exibida informando que o numero não foi removido
  BotaoRe.addEventListener("click", function () {
    let confirmacao = confirm("Deseja remover este numero?");
    if (confirmacao === true) {
      lista.removeChild(Tel);
    } else {
      alert("Numero não removido");
    }
  });
  //////////////////////////////////////////////
});
