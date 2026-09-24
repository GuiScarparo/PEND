const form = document.getElementById("form");
const statusEl = document.getElementById("status");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarShows();
});

async function buscarShows() {
  const apikey = "YvOsPXO9vPsG0XLBUyFTUReh3d6r4ybs";
  const keyword = document.getElementById("keyword").value.trim();
  const country = document.getElementById("country").value;

  const params = new URLSearchParams({
    apikey: apikey,
    classificationName: "music",
    countryCode: country,
    size: 10,
    sort: "date,asc"
  });

  if (keyword) params.set("keyword", keyword);

  const url = "https://app.ticketmaster.com/discovery/v2/events.json?" + params;

  statusEl.className = "";
  statusEl.textContent = "Carregando...";
  lista.innerHTML = "";

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro " + resposta.status + " – verifique sua API Key.");
    }

    const dados = await resposta.json();
    const eventos = dados._embedded ? dados._embedded.events : [];

    if (eventos.length === 0) {
      statusEl.textContent = "Nenhum show encontrado.";
      return;
    }

    statusEl.textContent = eventos.length + " shows encontrados.";
    eventos.forEach(mostrarShow);
  } catch (erro) {
    statusEl.className = "erro";
    statusEl.textContent = erro.message;
  }
}

function mostrarShow(evento) {
  const imagem = escolherImagem(evento.images || []);
  const data = formatarData(evento.dates.start);
  const descricao = montarDescricao(evento);

  const card = document.createElement("a");
  card.className = "card";
  card.href = evento.url;
  card.target = "_blank";
  card.rel = "noopener";

  card.innerHTML = `
    <img class="card-img" src="${imagem ? imagem.url : ""}" alt="${escapar(evento.name)}" loading="lazy" />
    <div class="card-corpo">
      <div class="data">
        <span class="dia">${data.dia}</span>
        <span class="detalhe">
          <span class="mes">${data.mesAno}</span>
          <span class="semana">${data.semana}</span>
        </span>
      </div>
      <h2>${escapar(evento.name)}</h2>
      <p>${escapar(descricao)}</p>
    </div>
  `;

  lista.appendChild(card);
}

function escolherImagem(imagens) {
  const ordem = ["4_3", "3_2", "16_9"];

  for (const ratio of ordem) {
    const achada = imagens.find((img) => img.ratio === ratio && img.width >= 500);
    if (achada) return achada;
  }

  return imagens[0];
}

function formatarData(inicio) {
  if (!inicio || !inicio.localDate) {
    return { dia: "—", mesAno: "Data a confirmar", semana: "" };
  }

  const [ano, mes, dia] = inicio.localDate.split("-").map(Number);
  const d = new Date(ano, mes - 1, dia);

  const mesAno = d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  let semana = d.toLocaleDateString("pt-BR", { weekday: "long" });

  if (inicio.localTime) semana += " · " + inicio.localTime.slice(0, 5);

  return { dia: String(dia).padStart(2, "0"), mesAno, semana };
}

function montarDescricao(evento) {
  const texto = evento.info || evento.pleaseNote;
  if (texto) return cortar(texto, 200);

  const local = evento._embedded && evento._embedded.venues && evento._embedded.venues[0];
  const classificacao = evento.classifications && evento.classifications[0];

  const genero =
    classificacao && classificacao.genre && classificacao.genre.name !== "Undefined"
      ? classificacao.genre.name
      : null;

  let frase = "Show" + (genero ? " de " + genero : "");

  if (local) {
    frase += " em " + local.name + (local.city ? ", " + local.city.name : "");
  }

  frase += ".";

  if (evento.priceRanges && evento.priceRanges[0]) {
    const preco = evento.priceRanges[0];
    frase += " Ingressos a partir de " + preco.min.toLocaleString("pt-BR") + " " + preco.currency + ".";
  }

  return frase;
}

function cortar(texto, limite) {
  return texto.length > limite ? texto.slice(0, limite).trim() + "…" : texto;
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}