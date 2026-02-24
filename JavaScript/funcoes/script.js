console.log("ola, Javascript");
//exemplos aritmeticos
console.log ("operadores aritimeticos")
let a = 10;
let b = 3;
console.log('adição +:',a +b );
console.log('subtração -:',a - b);
console.log('multiplicação X:',a * b);
console.log('divisão /:',a / b);
console.log('resto da divisão %:',a % b);
console.log('exponencial **:',a ** b);
let contador = 5;
contador++;
console.log('incremento',contador)

//1 
let a2 = 9;
let b2 = 7;
let c = 8.5;
    console.log([a2 + b2 + c]/3);

//2
let a3 = 10;
let b3 = 3;
console.log (a3 % b3)

//exemplo relacionais
let x = 10;
let y = '10';
console.log('igual(so valor)',x == y);
console.log('igual supremo(valor e tipo)',x === y);
console.log('diferente(so valor)',x != y);
console.log('diferente supremo(valor e tipoP)',x !== y);

//1
let x1 = 19;
if (x1 >= 18 ){
    console.log("você é maior de idade")
}
else{
    console.log("você é menor de idade")
};
//2
let x2 = 80;
let y1 = 80;
if(x2 > y1){
    console.log("x2 é maior que y1, ou seja ", x2, "maior que", y1)
}else if(y1 > x2){
    console.log("y1 é maior que x2, ou seja", y1, "maior que", x2)
}else{
    console.log("eles são iguais", x2, "é igual a", y1)
};

//exemplos logicos

let idade = 20;
let temcarteira = true;
console.log(idade >= 18 && temcarteira);
let chovendo = false;
let guardachuva = true;
console.log(chovendo || guardachuva);
let ligado = false;
console.log (!ligado); //true

//5
let x3 = 9;
let y2 = 97;

if(x3 >= 7 && y2 >= 75){
    console.log ("você esta aprovado")
}else{
    console.log("você esta reprovado")
}

//6

let login = false;
let token = true;
if(login || token){
    console.log("acesso concedido")
}else{
    console.log("acesso NEGADO")
};
