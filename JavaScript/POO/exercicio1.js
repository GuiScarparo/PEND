//Objeto: Funcionario
//Atributo:nome, idade, cargo, formação, cpf, carga horaria, salário
//Método: Trabalhar, Entregar tarefa, Receber salario, aposentar 

class Funcionario{
    constructor(nome, idade, cargo, CPF, formacao, carga_horaria, salario){
        this.nome= nome;
        this.cargo= cargo;
        this.idade= idade;
        this.formacao= formacao;
        this.CPF= CPF;
        this.carga_horaria= carga_horaria;
        this.salario= salario;
    }
    Trabalhar(){
        return(`O funcionario ${this.nome} com o CPF de ${this.CPF} e a formação de ${this.formacao} trabalhará hoje ${this.carga_horaria}`);
    }
    EntregarTarefa(){
        return(`O funcionario ${this.nome} está entregando a tarefa dentro do seu horario de trabalho`);
    }
    ReceberSalario(){
        return(`O funcionario ${this.nome} recebeu o salario de R$${this.salario}`);
    }
    Aposentar(){
        return(`O funcionario ${this.nome} está aposentando com ${this.idade} anos de idade e no cargo de ${this.cargo} com um sálario de R$${this.salario}`);
    }
}

const funcionario1 = new Funcionario("Guilherme Scarparo", 24, "Desenvolvedor", "492.267.448-90", "Ensino Superior Completo", "8 horas diarias", 4500);
const funcionario2 = new Funcionario("Rian", 23, "Desenvolvedor","449.931.648-07", "Ensino Superior Completo", "8 horas diarias", 4500);
const funcionario3 = new Funcionario("Renato", 38, "Professor","287.182.765-08", "Pedagogia", "9 horas diarias", 2000);

console.log("|-----------------------------------|")
console.log(funcionario1.Trabalhar());
console.log(funcionario1.EntregarTarefa());
console.log(funcionario1.ReceberSalario());
console.log(funcionario1.Aposentar());
console.log("|-----------------------------------|")

console.log("|-----------------------------------|")
console.log(funcionario2.Trabalhar());
console.log(funcionario2.EntregarTarefa());
console.log(funcionario2.ReceberSalario());
console.log(funcionario2.Aposentar());
console.log("|-----------------------------------|")

console.log("|-----------------------------------|")
console.log(funcionario3.Trabalhar());
console.log(funcionario3.EntregarTarefa());
console.log(funcionario3.ReceberSalario());
console.log(funcionario3.Aposentar());
console.log("|-----------------------------------|")