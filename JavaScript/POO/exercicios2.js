//Exercício 2 - POO 


class Aluno{
    constructor(nome, idade, curso, matricula){
    
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    Aprender(){
        return(`O aluno ${this.nome} de ${this.idade} anos com a matricula ${this.matricula} está aprendendo o curso de ${this.curso}`);
    }

    Estudar(){
        return(`O aluno ${this.nome} está estudando no curso de ${this.curso}`);
    }
    Apresentar(){
        return(`O aluno ${this.nome} com a matricula ${this.matricula} está apresentando o curso de ${this.curso}`);
    }
}

const aluno1 = new Aluno("Guilherme Scarparo", 24, "Desenvolvimento de Software", "01.01.2025");
const aluno2 = new Aluno("Virgulino", 23, "Pizzaiolo", "03.02.1979");
const aluno3 = new Aluno("Rogerio Ceni", 38, "Goleiro", "01.01.1990");
const alunoEspecial = new Aluno("Peter Parker", 21,"Ciências", "não registrado");

console.log("|-----------------------------------|")
console.log(aluno1.Aprender());
console.log(aluno1.Estudar());
console.log(aluno1.Apresentar());
console.log("|-----------------------------------|")
console.log(aluno2.Aprender());
console.log(aluno2.Estudar());
console.log(aluno2.Apresentar());
console.log("|-----------------------------------|")
console.log(aluno3.Aprender());
console.log(aluno3.Estudar());
console.log(aluno3.Apresentar());
console.log("|-----------------------------------|")
console.log(alunoEspecial.Aprender());
console.log(alunoEspecial.Estudar());
console.log(alunoEspecial.Apresentar());
console.log("|-----------------------------------|")