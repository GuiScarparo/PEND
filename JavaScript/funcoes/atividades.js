//horario

function horatual(){
    let olhaHora = new Date()

    console.log(olhaHora.getHours()+ ':'+ olhaHora.getMinutes()+ ':' + olhaHora.getSeconds());
}
horatual();


//soma e media

function mediasoma(num,num2){
    let soma = parseFloat(num) + parseFloat(num2);
    let media = soma/2;
    return {
        resultsoma: soma,
        resultmedia: media
    };    
}
let num = prompt("digite um numero");
let num2 = prompt("digite mais um numero");

console.log(mediasoma(num, num2));

//quantidade de letras e maiusculo

function texto(nome){
     let quantidade = nome.length;
     let maiusculo = nome.toUpperCase();
     return{
        QuantidadeLetras: quantidade,
        NomeMaiusculo: maiusculo
     };
}
let nome = prompt("digite seu nome")
console.log(texto(nome))

//verificação

function verifica(frase){
    let verifica = frase.includes("HTML");
    return{
        ContemHtml: verifica
    };
}

let frase = prompt("digite uma frase: ");

console.log(verifica(frase))