const API_KEY = "test_2850771b9b050b28bc85833b98bf95";

const URL_API =
    "https://api.api-futebol.com.br/v1/campeonatos/10/tabela";

// Elementos do HTML
const tabela = document.getElementById("tabelaBrasileirao");
const status = document.getElementById("status");
const inputPesquisa = document.getElementById("inputPesquisa");
const btnPesquisar = document.getElementById("btnPesquisar");
const btnLimpar = document.getElementById("btnLimpar");

// Guarda a classificação completa para realizar as pesquisas
let classificacaoCompleta = [];

// Guarda o time selecionado
let timeSelecionado = null;


// Normaliza o texto
function normalizarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}


// Busca os dados da API
async function buscarTabela() {

    status.textContent = "Carregando dados dos times...";
    btnPesquisar.disabled = true;

    try {

        const response = await fetch(URL_API, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const dados = await response.json();

        if (!Array.isArray(dados)) {
            throw new Error(
                "A resposta da API não é uma lista de classificação."
            );
        }

        // Guarda os dados sem mostrar a tabela
        classificacaoCompleta = dados;

        tabela.innerHTML = "";

        status.textContent =
            "Digite o nome de um time para pesquisar.";

    } catch (erro) {

        console.error("Erro ao buscar tabela:", erro);

        status.textContent =
            "Erro ao carregar os dados.";

        tabela.innerHTML = `
            <tr>
                <td colspan="2" class="mensagem">
                    Não foi possível carregar os dados.
                </td>
            </tr>
        `;

    } finally {

        btnPesquisar.disabled = false;
    }
}


// Mostra somente um time
// Esquerda: informação requerida | Direita: dado vindo da API
function mostrarTabela(classificacao) {

    tabela.innerHTML = "";

    const time = classificacao.time;

    const linhas = [
        ["Posição do time", `${classificacao.posicao}º`],
        ["Escudo", `<img src="${time.escudo}" alt="Escudo do ${time.nome_popular}" class="escudo">`],
        ["Pontuação", classificacao.pontos],
        ["Partidas jogadas", classificacao.jogos],
        ["Vitórias", classificacao.vitorias],
        ["Empates", classificacao.empates],
        ["Derrotas", classificacao.derrotas],
        ["Gols feitos", classificacao.gols_pro],
        ["Gols tomados", classificacao.gols_contra],
        ["Saldo de gols", classificacao.saldo_gols],
        ["Aproveitamento", `${classificacao.aproveitamento}%`]
    ];

    linhas.forEach(([rotulo, valor]) => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <th scope="row">${rotulo}</th>
            <td>${valor}</td>
        `;

        tabela.appendChild(linha);
    });
}


// Pesquisa o time
function pesquisarTime() {

    const pesquisa =
        normalizarTexto(inputPesquisa.value.trim());

    // Limpa a tabela antes de pesquisar
    tabela.innerHTML = "";

    timeSelecionado = null;


    // Se não digitou nada
    if (pesquisa === "") {

        status.textContent =
            "Digite o nome de um time para pesquisar.";

        return;
    }


    // Procura SOMENTE pelo nome completo do time
    const resultado =
        classificacaoCompleta.find((classificacao) => {

            const nomeTime =
                normalizarTexto(
                    classificacao.time.nome_popular
                );

            return nomeTime === pesquisa;
        });


    // Não encontrou
    if (!resultado) {

        status.textContent =
            "Time não encontrado.";

        return;
    }


    // Encontrou o time
    timeSelecionado = resultado;

    mostrarTabela(timeSelecionado);

    status.textContent =
        `Exibindo ${timeSelecionado.time.nome_popular}`;
}


// Botão pesquisar
btnPesquisar.addEventListener(
    "click",
    pesquisarTime
);


// Pesquisar pressionando Enter
inputPesquisa.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            pesquisarTime();
        }

    }
);


// Botão limpar
btnLimpar.addEventListener(
    "click",
    () => {

        inputPesquisa.value = "";

        timeSelecionado = null;

        tabela.innerHTML = "";

        status.textContent =
            "Digite o nome de um time para pesquisar.";
    }
);


// Inicia o sistema
buscarTabela();