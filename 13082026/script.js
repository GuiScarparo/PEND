const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const curso = document.querySelector('#curso');
const matricula = document.querySelector('#matricula');
const BotaoCadastro = document.querySelector('#BotaoCadastrar');

BotaoCadastro.addEventListener('click', function() {
    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);
    Turma.adicionarAluno(aluno);
    console.log(Turma.alunos);
    Turma.ExibirTela();    
});

class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar(){
        console.log(`${this.nome} está estudando.`);
    }

    apresentar(){
        console.log(`${this.nome} esta fazendo uma otima apresentação.`);
    }

    
}

class turma{
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    ExibirTela(){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        this.alunos.forEach(aluno => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${aluno.nome}</p>
                    <p>Idade: ${aluno.idade}</p>
                    <p>Curso: ${aluno.curso}</p>
                    <p>Matricula: ${aluno.matricula}</p>
                </div>
            `;
        });
    }
}
const Turma = new turma();