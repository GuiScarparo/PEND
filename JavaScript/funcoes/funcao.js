//exemplo funcoes
function saudacao (){
    console.log("ola, javascript, função sem parametro");
}
saudacao();

function somar (a, b){
        return a + b
}
console.log(somar(5,3), "função com retorno");

function saudacao2 (nome){
        console.log("ola, " + nome , ",função sem retorno")
}
saudacao2("dionisio");

//7

function IMC(a,b){
    return a/b**2
}
console.log(IMC(70, 1.87));

//8
function parimpar(a){
    if (a %2 === 0){
        console.log ("seu numero é par")
    };
    if(a%2 === 1){
        console.log ("seu numero é impar")
    }
}
parimpar(9);


console.log("********** Funções nativas **********");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia: ", data.getDate() );
    console.log("Mês: ", data.getMonth()+ 1);
    console.log("Ano: ", data.getFullYear());
    console.log("Hora: ", data.getHours());
    console.log("MInuto: ", data.getMinutes());
}

mostrarDataHora();  

function Horadata(){
    let olhaHora = new Date();

    console.log(olhaHora.getHours()+ ':'+ olhaHora.getMinutes()+ ':' + olhaHora.getSeconds()+ ' ' + olhaHora.getDate()+ '/' + (olhaHora.getMonth()+1) + '/' + olhaHora.getFullYear());
}

Horadata();
console.log("mostra o PI: ", Math.PI);

function calcularOperacoes(nu){
    console.log("Raiz: ", Math.sqrt(nu));
    console.log("Arredondando: ", Math.round(nu));
    console.log("Para cima: ", Math.ceil(nu));
    console.log("Para baixo: ", Math.floor(nu));
    console.log("quadrado: ", Math.pow(nu, 2))
    console.log("valor absoluto: ", Math.abs(nu))
}

calcularOperacoes(7.8);

function analisartexto(texto){
    console.log("Tamanho: ", texto.length);
    console.log("maiusculo: ", texto.toUpperCase());
    console.log("Minusculo: ", texto.toLowerCase());
}

analisartexto("arroz")

function verificaSeTemAPalavra(tex){
    console.log(tex.includes("javascript"));

}

verificaSeTemAPalavra("Eu estudo javascript");

function retornaAFraseCompleta(nome, curso){
    return "Aluno: "+ nome + " | Curso: "+ curso;
}
console.log(retornaAFraseCompleta("José", "front-end"));