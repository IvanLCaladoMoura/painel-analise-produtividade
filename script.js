/* =========================================================
   ANÁLISE DE PRODUTIVIDADE — script.js
   Organização:
   PARTE 1. Dados de exemplo e configurações
   PARTE 2. Funções de formatação (moeda, %, nomes)
   PARTE 3. Análise: limpeza, consolidação e cálculos
   PARTE 4. Renderização: KPIs, tabelas e listas
   PARTE 5. Gráficos (Chart.js)
   PARTE 6. Interações: filtros, ordenação, CSV, tema, importação
   PARTE 7. Inicialização
   ========================================================= */

"use strict"; // modo estrito: o JS avisa erros que passariam despercebidos

/* =========================================================
   PARTE 1 — DADOS DE EXEMPLO E CONFIGURAÇÕES
   ---------------------------------------------------------
   Cópia fiel das abas JUL, AGO e SET da planilha original,
   no formato [nome, valor]. Os nomes reais foram trocados por
   códigos (COLABORADOR 01, 02...) para publicar no GitHub.
   As "sujeiras" da planilha foram mantidas de propósito
   (espaços sobrando, linhas em branco, grafia diferente),
   porque a limpeza faz parte da análise.
   ========================================================= */
const DADOS_EXEMPLO = {
  julho: [
    ["COLABORADOR 41", 191.119],
    ["COLABORADOR 03 ", 191.119],
    ["COLABORADOR 06 ", 570.8589],
    ["COLABORADOR 10 ", 227.0969],
    ["COLABORADOR 58 ", 191.119],
    ["COLABORADOR 39", 277.5206],
    ["COLABORADOR 53 ", 246.0493],
    ["COLABORADOR 29 ", 305.0967],
    ["COLABORADOR 17 ", 214.847],
    ["COLABORADOR 28 ", 307.1461],
    ["COLABORADOR 30", 193.8848],
    ["COLABORADOR 07", 202.2515],
    ["COLABORADOR 52 ", 472.5156],
    ["COLABORADOR 23 ", 44.3205],
    ["COLABORADOR 18 ", 191.119],
    ["COLABORADOR 57 ", 274.5113],
    ["COLABORADOR 19", 193.5022],
    ["COLABORADOR 24 ", 421.9641],
    ["COLABORADOR 01", 191.119],
    ["COLABORADOR 48 ", 191.119],
    ["COLABORADOR 27 ", 191.119],
    ["COLABORADOR 25", 191.119],
    ["COLABORADOR 02", 445.1996],
    ["COLABORADOR 45", 360.081],
    ["COLABORADOR 56 ", 344.9632],
    ["COLABORADOR 04 ", 297.0437],
    ["COLABORADOR 49", 125.8156],
    ["COLABORADOR 44", 210.7073],
    ["COLABORADOR 51", 297.6414],
    ["COLABORADOR 50 ", 340.7858],
    ["COLABORADOR 34 ", 456.2395],
    ["COLABORADOR 54 ", 256.9277],
    ["COLABORADOR 35 ", 299.9565],
    ["COLABORADOR 15", 672.7684],
    ["COLABORADOR 33 ", 293.9654],
    ["COLABORADOR 31", 252.2759],
    ["COLABORADOR 14 ", 59.3486],
    ["COLABORADOR 12 ", 0.0],
    ["COLABORADOR 40", 191.119],
    ["COLABORADOR 05 ", 129.3482],
    ["COLABORADOR 36", 375.2358],
    ["COLABORADOR 11 ", 251.191],
    ["COLABORADOR 22 ", 477.6217],
    ["COLABORADOR 55 ", 305.4102],
    ["COLABORADOR 32 ", 0.0],
    ["COLABORADOR 38 ", 116.3352],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0]
  ],
  agosto: [
    ["COLABORADOR 41", 181.0136],
    ["COLABORADOR 03 ", 181.7991],
    ["COLABORADOR 06 ", 181.0136],
    ["COLABORADOR 10 ", 437.1128],
    ["COLABORADOR 58 ", 181.0136],
    ["COLABORADOR 39", 457.2677],
    ["COLABORADOR 53 ", 242.6765],
    ["COLABORADOR 29 ", 303.1482],
    ["COLABORADOR 20 ", 0.0],
    ["COLABORADOR 28 ", 181.0136],
    ["COLABORADOR 30", 204.9716],
    ["COLABORADOR 07", 206.4612],
    ["COLABORADOR 52 ", 503.1905],
    ["COLABORADOR 42", 0.0],
    ["COLABORADOR 18 ", 181.0136],
    ["COLABORADOR 19", 201.1075],
    ["COLABORADOR 16", 181.0136],
    ["COLABORADOR 24 ", 345.3531],
    ["COLABORADOR 01", 181.0136],
    ["COLABORADOR 27 ", 181.0136],
    ["COLABORADOR 25", 326.0033],
    ["COLABORADOR 02", 443.9594],
    ["COLABORADOR 45", 221.972],
    ["COLABORADOR 56 ", 470.0625],
    ["COLABORADOR 04 ", 431.6393],
    ["COLABORADOR 49", 178.0244],
    ["COLABORADOR 44", 281.2348],
    ["COLABORADOR 51", 246.9927],
    ["COLABORADOR 50 ", 578.4668],
    ["COLABORADOR 34 ", 399.4204],
    ["COLABORADOR 35 ", 430.1941],
    ["COLABORADOR 15", 907.6574],
    ["COLABORADOR 33 ", 356.382],
    ["COLABORADOR 31", 342.6049],
    ["COLABORADOR 14 ", 0.0],
    ["COLABORADOR 12 ", 0.0],
    ["COLABORADOR 40", 181.0136],
    ["COLABORADOR 08", 181.0136],
    ["COLABORADOR 05 ", 302.7549],
    ["COLABORADOR 36", 331.1905],
    ["COLABORADOR 11 ", 280.6102],
    ["COLABORADOR 22 ", 255.6302],
    ["COLABORADOR 38 ", 221.009],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    ["COLAB.57", 138.3728],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0]
  ],
  setembro: [
    ["COLABORADOR 08", 169.4743],
    ["COLABORADOR 51", 208.6551],
    ["COLABORADOR 46 ", 108.7327],
    ["COLABORADOR 07", 206.4113],
    ["COLABORADOR 33 ", 284.8659],
    ["COLABORADOR 29 ", 303.2828],
    ["COLABORADOR 44", 284.6341],
    ["COLABORADOR 23 ", 221.201],
    ["COLABORADOR 21 ", 50.2729],
    ["COLABORADOR 10 ", 323.1015],
    ["COLABORADOR 47 ", 118.632],
    ["COLABORADOR 12 ", 0.0],
    ["COLABORADOR 30", 176.4239],
    ["COLABORADOR 09", 105.9572],
    ["COLABORADOR 34 ", 38.2609],
    ["COLABORADOR 11 ", 180.9972],
    ["COLABORADOR 04 ", 438.3963],
    ["COLABORADOR 13 ", 135.5275],
    ["COLABORADOR 18 ", 169.4743],
    ["COLABORADOR 22 ", 235.3815],
    ["COLABORADOR 49", 161.4023],
    ["COLABORADOR 05 ", 346.1851],
    ["COLABORADOR 50 ", 519.4238],
    ["COLABORADOR 03 ", 182.7582],
    ["COLABORADOR 06 ", 305.7604],
    [null, 0.0],
    ["COLABORADOR 19", 169.585],
    ["COLABORADOR 35 ", 427.9101],
    ["COLABORADOR 36", 287.5438],
    ["COLABORADOR 31", 258.4085],
    ["COLABORADOR 02", 517.5854],
    ["COLABORADOR 14 ", 0.0],
    ["COLABORADOR 15", 881.7738],
    ["COLABORADOR 53 ", 275.9032],
    ["COLABORADOR 25", 308.4783],
    ["COLABORADOR 01", 169.4743],
    ["COLABORADOR 56 ", 634.3523],
    ["COLABORADOR 37", 121.3359],
    ["COLABORADOR 24 ", 326.0219],
    ["COLABORADOR 39", 289.2195],
    ["COLABORADOR 41", 169.4743],
    ["COLABORADOR 28 ", 275.7364],
    ["COLABORADOR 52 ", 325.8644],
    ["COLABORADOR 16", 169.4743],
    ["COLABORADOR 26 ", 169.4743],
    ["COLABORADOR 43 ", 198.1365],
    ["COLABORADOR 45", 191.5588],
    ["COLABORADOR 40", 169.4743],
    ["COLABORADOR 38 ", 200.3587],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0],
    [null, 0.0]
  ]
};

// Os três meses analisados. "campo" é a chave em DADOS_EXEMPLO,
// "aba" é o nome da aba no Excel e "cor" é a variável CSS do mês.
const MESES = [
  { chave: "jul", nome: "Julho", curto: "Jul", campo: "julho", aba: "JUL", cor: "--cor-jul" },
  { chave: "ago", nome: "Agosto", curto: "Ago", campo: "agosto", aba: "AGO", cor: "--cor-ago" },
  { chave: "set", nome: "Setembro", curto: "Set", campo: "setembro", aba: "SET", cor: "--cor-set" },
];

// Grafias diferentes que representam a mesma pessoa.
// Na planilha original, uma colaboradora aparece com outro nome em agosto.
const APELIDOS = {
  "COLAB.57": "COLABORADOR 57",
};

// Largura de cada faixa do histograma (em R$)
const LARGURA_FAIXA = 250;

// Texto padrão da linha "origem dos dados"
const TEXTO_FONTE_EXEMPLO =
  "Dados de exemplo anonimizados (nomes trocados por códigos). " +
  "Use “Importar planilha” para analisar outro arquivo — ele é lido só no seu navegador, nada é enviado.";

// Estado da página: tudo que muda com a interação do usuário fica aqui
const estado = {
  analise: null,        // resultado da PARTE 3
  colunaOrdem: "total", // coluna usada para ordenar o ranking
  ordemCrescente: false,
  busca: "",
  limite: 15,           // 0 = todos
  graficos: {},         // guarda os gráficos criados para poder destruir/recriar
};

/* =========================================================
   PARTE 2 — FUNÇÕES DE FORMATAÇÃO
   ---------------------------------------------------------
   Intl.NumberFormat formata números no padrão brasileiro
   (R$ 1.234,56 e 12,5%). Criamos uma vez e reaproveitamos.
   ========================================================= */

const formatoMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
// Versão compacta para os eixos dos gráficos: "R$ 12 mil"
const formatoMoedaEixo = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  notation: "compact",
});
const formatoPorcentagem = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});
const formatoNumero = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });

function moeda(valor) {
  return formatoMoeda.format(valor);
}

function moedaEixo(valor) {
  return formatoMoedaEixo.format(valor);
}

function porcentagem(valor) {
  return formatoPorcentagem.format(valor);
}

// Variação com seta + cor. A seta garante que a informação
// não depende só da cor (acessibilidade para daltônicos).
function variacaoHTML(valor) {
  if (valor === null) return "–";
  if (Math.abs(valor) < 0.0005) return "▬ 0,0%"; // praticamente estável
  const classe = valor > 0 ? "variacao--alta" : "variacao--queda";
  const seta = valor > 0 ? "▲" : "▼";
  return `<span class="${classe}">${seta} ${porcentagem(Math.abs(valor))}</span>`;
}

// "  joão  DA silva " -> "JOÃO DA SILVA" (+ troca de apelido, se houver)
function normalizarNome(nomeBruto) {
  if (nomeBruto === null || nomeBruto === undefined || nomeBruto === 0 || nomeBruto === "0") {
    return "";
  }
  const nome = String(nomeBruto).trim().replace(/\s+/g, " ").toUpperCase();
  return APELIDOS[nome] || nome;
}

// "MARIA DA SILVA" -> "Maria da Silva" (só para exibir na tela)
function nomeBonito(nome) {
  const conectivos = ["da", "das", "de", "do", "dos", "e"];
  return nome
    .toLowerCase()
    .split(" ")
    .map((palavra) =>
      conectivos.includes(palavra) ? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1)
    )
    .join(" ");
}

// Soma uma lista de números
function somar(lista) {
  return lista.reduce((acumulado, valor) => acumulado + valor, 0);
}

/* =========================================================
   PARTE 3 — ANÁLISE
   ---------------------------------------------------------
   Aqui está a lógica que a aba "Painel" do Excel fazia com
   SUMPRODUCT, COUNTIF, INDEX/MATCH etc.
   Cada função recebe dados e devolve um resultado, sem mexer
   na tela. Isso deixa a análise fácil de testar e reaproveitar.
   ========================================================= */

// 3.1 Limpa os registros e junta os valores de cada pessoa
function consolidar(dadosBrutos) {
  const pessoas = new Map(); // nome -> { nome, jul, ago, set }
  const somaBruta = { jul: 0, ago: 0, set: 0 };
  const qualidade = { lidos: 0, descartados: 0, padronizados: 0, unificados: 0 };

  for (const mes of MESES) {
    const registros = dadosBrutos[mes.campo] || [];

    for (const [nomeBruto, valorBruto] of registros) {
      const valor = Number(valorBruto) || 0;
      const nome = normalizarNome(nomeBruto);

      // Linha sem nome mas com valor = linha de TOTAL do Excel. Ignoramos.
      if (!nome && valor !== 0) continue;

      qualidade.lidos++;
      somaBruta[mes.chave] += valor;

      // Nome em branco/"0" ou valor zerado não entra na análise
      if (!nome || valor === 0) {
        qualidade.descartados++;
        continue;
      }

      // Conta o que a limpeza precisou corrigir
      const nomeSoLimpo = String(nomeBruto).trim().replace(/\s+/g, " ").toUpperCase();
      if (nomeSoLimpo !== nome) qualidade.unificados++;
      else if (String(nomeBruto) !== nome) qualidade.padronizados++;

      // Cria a pessoa na primeira vez que ela aparece
      if (!pessoas.has(nome)) {
        pessoas.set(nome, { nome, jul: 0, ago: 0, set: 0 });
      }
      pessoas.get(nome)[mes.chave] += valor;
    }
  }

  // Map -> lista, com total do trimestre, ordenada do maior para o menor
  const colaboradores = [...pessoas.values()]
    .map((p) => ({ ...p, total: p.jul + p.ago + p.set }))
    .filter((p) => p.total > 0)
    .sort((a, b) => b.total - a.total);

  // Posição no ranking e participação % no total geral
  const totalGeral = somar(colaboradores.map((c) => c.total));
  colaboradores.forEach((c, indice) => {
    c.posicao = indice + 1;
    c.participacao = totalGeral ? c.total / totalGeral : 0;
  });

  return { colaboradores, somaBruta, qualidade };
}

// 3.2 Resumo de cada mês + linha do trimestre
function calcularResumo(colaboradores, somaBruta) {
  const meses = MESES.map((mes, indice) => {
    const valores = colaboradores.map((c) => c[mes.chave]);
    const total = somar(valores);
    const quantidade = valores.filter((v) => v > 0).length;
    return {
      ...mes,
      total,
      quantidade,
      media: quantidade ? total / quantidade : 0,
      variacao: null, // preenchida logo abaixo
      confere: Math.abs(total - somaBruta[mes.chave]) < 0.01,
      indice,
    };
  });

  // Variação em relação ao mês anterior
  meses.forEach((mes, i) => {
    if (i > 0 && meses[i - 1].total) {
      mes.variacao = mes.total / meses[i - 1].total - 1;
    }
  });

  const total = somar(meses.map((m) => m.total));
  const somaDasQuantidades = somar(meses.map((m) => m.quantidade));
  const primeiro = meses[0].total;
  const ultimo = meses[meses.length - 1].total;

  const trimestre = {
    total,
    quantidade: colaboradores.length, // pessoas com valor em pelo menos 1 mês
    media: somaDasQuantidades ? total / somaDasQuantidades : 0, // média mensal por colaborador
    variacao: primeiro ? ultimo / primeiro - 1 : null, // último mês x primeiro mês
  };

  return { meses, trimestre };
}

// 3.3 Estatística descritiva de uma lista de valores
function calcularEstatisticas(valores) {
  const n = valores.length;
  if (n === 0) return null;

  const ordenados = [...valores].sort((a, b) => a - b);
  const media = somar(valores) / n;
  const meio = Math.floor(n / 2);
  const mediana = n % 2 ? ordenados[meio] : (ordenados[meio - 1] + ordenados[meio]) / 2;

  // Desvio padrão amostral (divide por n - 1), igual ao DESVPAD do Excel
  const somaQuadrados = somar(valores.map((v) => (v - media) ** 2));
  const desvio = n > 1 ? Math.sqrt(somaQuadrados / (n - 1)) : 0;

  return {
    n,
    media,
    mediana,
    desvio,
    minimo: ordenados[0],
    maximo: ordenados[n - 1],
    coeficienteVariacao: media ? desvio / media : 0,
  };
}

// 3.4 Destaques do trimestre
function calcularDestaques(colaboradores, resumo, estatisticas) {
  // Maior valor de uma pessoa em um único mês
  let maiorNoMes = { valor: 0, nome: "", mes: "" };
  for (const c of colaboradores) {
    for (const mes of MESES) {
      if (c[mes.chave] > maiorNoMes.valor) {
        maiorNoMes = { valor: c[mes.chave], nome: c.nome, mes: mes.curto };
      }
    }
  }

  const mesMaior = resumo.meses.reduce((maior, m) => (m.total > maior.total ? m : maior));

  return {
    lider: colaboradores[0],
    mesMaior,
    maiorNoMes,
    acimaDaMedia: colaboradores.filter((c) => c.total > estatisticas.media).length,
    presentesNosTres: colaboradores.filter((c) => MESES.every((m) => c[m.chave] > 0)).length,
  };
}

// 3.5 Histograma: conta quantos valores caem em cada faixa
function calcularHistograma(valores, largura) {
  const maximo = Math.max(...valores, 0);
  const quantidadeFaixas = Math.max(1, Math.ceil(maximo / largura));
  const faixas = Array.from({ length: quantidadeFaixas }, (_, i) => ({
    de: i * largura,
    ate: (i + 1) * largura,
    quantidade: 0,
  }));

  for (const valor of valores) {
    // Math.min evita que o valor máximo exato caia numa faixa que não existe
    const indice = Math.min(Math.floor(valor / largura), quantidadeFaixas - 1);
    faixas[indice].quantidade++;
  }
  return faixas;
}

// 3.6 Junta tudo: recebe os dados brutos e devolve a análise completa
function analisar(dadosBrutos) {
  const { colaboradores, somaBruta, qualidade } = consolidar(dadosBrutos);
  const resumo = calcularResumo(colaboradores, somaBruta);
  const totais = colaboradores.map((c) => c.total);
  const estatisticas = calcularEstatisticas(totais);

  return {
    colaboradores,
    qualidade,
    resumo,
    estatisticas,
    destaques: estatisticas ? calcularDestaques(colaboradores, resumo, estatisticas) : null,
    histograma: calcularHistograma(totais, LARGURA_FAIXA),
  };
}

/* =========================================================
   PARTE 4 — RENDERIZAÇÃO (KPIs, TABELAS E LISTAS)
   ---------------------------------------------------------
   Montamos o HTML em uma string e inserimos de uma vez só
   com innerHTML. Isso é mais rápido do que criar elemento
   por elemento dentro de um loop.
   ========================================================= */

// Atalho para document.querySelector
const $ = (seletor) => document.querySelector(seletor);

// Evita que um texto vindo da planilha seja interpretado como HTML
function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function renderizarKPIs({ meses, trimestre }) {
  const cartoesMeses = meses.map((m) => `
    <article class="kpi">
      <p class="kpi__rotulo"><span class="ponto ponto--${m.chave}"></span>Total ${m.nome}</p>
      <p class="kpi__valor">${moeda(m.total)}</p>
      <p class="kpi__detalhe">${m.variacao === null ? "Mês base" : `${variacaoHTML(m.variacao)} vs. mês anterior`}</p>
    </article>`);

  const cartoesTrimestre = `
    <article class="kpi kpi--principal">
      <p class="kpi__rotulo">Total do trimestre</p>
      <p class="kpi__valor">${moeda(trimestre.total)}</p>
      <p class="kpi__detalhe">${meses.map((m) => m.nome).join(" + ")}</p>
    </article>
    <article class="kpi">
      <p class="kpi__rotulo">Colaboradores</p>
      <p class="kpi__valor">${trimestre.quantidade}</p>
      <p class="kpi__detalhe">com valor no período</p>
    </article>
    <article class="kpi">
      <p class="kpi__rotulo">Média mensal / colab.</p>
      <p class="kpi__valor">${moeda(trimestre.media)}</p>
      <p class="kpi__detalhe">média do trimestre</p>
    </article>`;

  $("#kpis").innerHTML = cartoesMeses.join("") + cartoesTrimestre;
}

function renderizarResumo({ meses, trimestre }) {
  const linhas = meses.map((m) => `
    <tr>
      <td><span class="ponto ponto--${m.chave}"></span>${m.nome}</td>
      <td class="num">${moeda(m.total)}</td>
      <td class="num">${m.quantidade}</td>
      <td class="num">${moeda(m.media)}</td>
      <td class="num">${variacaoHTML(m.variacao)}</td>
      <td>${m.confere ? '<span class="ok">✔ OK</span>' : '<span class="revisar">⚠ Revisar</span>'}</td>
    </tr>`);

  linhas.push(`
    <tr class="linha-total">
      <td>Trimestre</td>
      <td class="num">${moeda(trimestre.total)}</td>
      <td class="num">${trimestre.quantidade}</td>
      <td class="num">${moeda(trimestre.media)}</td>
      <td class="num">${variacaoHTML(trimestre.variacao)}</td>
      <td></td>
    </tr>`);

  $("#tabela-resumo tbody").innerHTML = linhas.join("");
}

// Monta os pares rótulo/valor de uma <dl>
function itensLista(itens) {
  return itens
    .map(([rotulo, detalhe, valor]) => `
      <div>
        <dt>${rotulo}${detalhe ? `<small>${detalhe}</small>` : ""}</dt>
        <dd>${valor}</dd>
      </div>`)
    .join("");
}

function renderizarDestaques(destaques, qualidade) {
  if (!destaques) {
    $("#destaques").innerHTML = "<p>Sem dados para analisar.</p>";
    return;
  }
  const { lider, mesMaior, maiorNoMes, acimaDaMedia, presentesNosTres } = destaques;

  $("#destaques").innerHTML = itensLista([
    ["Maior total no trimestre", escaparHTML(nomeBonito(lider.nome)), moeda(lider.total)],
    ["Mês de maior valor", mesMaior.nome, moeda(mesMaior.total)],
    ["Maior valor em um único mês", `${escaparHTML(nomeBonito(maiorNoMes.nome))} (${maiorNoMes.mes})`, moeda(maiorNoMes.valor)],
    ["Acima da média do trimestre", "colaboradores com total acima da média", acimaDaMedia],
    ["Presentes nos 3 meses", "colaboradores com valor em todos os meses", presentesNosTres],
    ["Registros desconsiderados", "nome em branco/“0” ou valor zerado", qualidade.descartados],
  ]);
}

function renderizarEstatisticas(est) {
  if (!est) {
    $("#estatisticas").innerHTML = "<p>Sem dados para analisar.</p>";
    return;
  }
  $("#estatisticas").innerHTML = itensLista([
    ["Média", `de ${est.n} colaboradores`, moeda(est.media)],
    ["Mediana", "metade ganha menos, metade mais", moeda(est.mediana)],
    ["Desvio padrão", "o quanto os valores se espalham", moeda(est.desvio)],
    ["Coeficiente de variação", "desvio ÷ média", porcentagem(est.coeficienteVariacao)],
    ["Mínimo", "", moeda(est.minimo)],
    ["Máximo", "", moeda(est.maximo)],
  ]);
}

function renderizarQualidade(analise) {
  const { qualidade, resumo, colaboradores } = analise;
  const mesesOk = resumo.meses.filter((m) => m.confere).length;

  const etapas = [
    [qualidade.lidos, "registros lidos nas abas " + MESES.map((m) => m.aba).join(", ")],
    [qualidade.descartados, "registros sem nome ou com valor zerado, desconsiderados"],
    [qualidade.padronizados, "nomes com espaços extras ou maiúsculas/minúsculas padronizados"],
    [qualidade.unificados, "registros com grafia diferente unificados ao nome correto"],
    [colaboradores.length, "colaboradores únicos após consolidar os três meses"],
    [`${mesesOk}/${resumo.meses.length}`, "meses em que a soma consolidada confere com a soma bruta"],
  ];

  $("#qualidade").innerHTML = etapas
    .map(([numero, texto]) => `<li><strong>${numero}</strong><span>${texto}</span></li>`)
    .join("");
}

// Aplica busca, limite e ordenação ao ranking
function filtrarRanking() {
  const termo = estado.busca.trim().toUpperCase();
  let lista = estado.analise.colaboradores;

  if (termo) {
    // Com busca ativa, procuramos em todos (ignora o "Top N")
    lista = lista.filter((c) => c.nome.includes(termo));
  } else if (estado.limite > 0) {
    lista = lista.filter((c) => c.posicao <= estado.limite);
  }

  const coluna = estado.colunaOrdem;
  const direcao = estado.ordemCrescente ? 1 : -1;

  // [...lista] cria uma cópia, para não bagunçar a lista original
  return [...lista].sort((a, b) => {
    if (coluna === "nome") return a.nome.localeCompare(b.nome, "pt-BR") * direcao;
    return (a[coluna] - b[coluna]) * direcao;
  });
}

function renderizarRanking() {
  const lista = filtrarRanking();
  const todos = estado.analise.colaboradores;
  const maiorParticipacao = todos.length ? todos[0].participacao : 1;

  const linhas = lista.map((c) => `
    <tr>
      <td>${c.posicao}</td>
      <td>${escaparHTML(nomeBonito(c.nome))}</td>
      <td class="num">${moeda(c.jul)}</td>
      <td class="num">${moeda(c.ago)}</td>
      <td class="num">${moeda(c.set)}</td>
      <td class="num"><strong>${moeda(c.total)}</strong></td>
      <td class="num">
        <span class="barra-part" aria-hidden="true"><span style="width:${(c.participacao / maiorParticipacao) * 100}%"></span></span>${porcentagem(c.participacao)}
      </td>
    </tr>`);

  $("#tabela-ranking tbody").innerHTML =
    linhas.join("") || '<tr><td colspan="7">Nenhum colaborador encontrado.</td></tr>';

  // Rodapé com o total geral de TODOS os colaboradores
  const soma = (chave) => somar(todos.map((c) => c[chave]));
  $("#tabela-ranking tfoot").innerHTML = `
    <tr>
      <td></td>
      <td>Total geral</td>
      <td class="num">${moeda(soma("jul"))}</td>
      <td class="num">${moeda(soma("ago"))}</td>
      <td class="num">${moeda(soma("set"))}</td>
      <td class="num">${moeda(soma("total"))}</td>
      <td class="num">${porcentagem(todos.length ? 1 : 0)}</td>
    </tr>`;

  $("#contagem-ranking").textContent =
    `Mostrando ${lista.length} de ${todos.length} colaboradores. Clique no título de uma coluna para ordenar.`;

  // Indica a coluna ordenada (o CSS desenha a seta ▲/▼)
  document.querySelectorAll("#tabela-ranking th").forEach((th) => {
    const botao = th.querySelector("button");
    if (botao.dataset.coluna === estado.colunaOrdem) {
      th.setAttribute("aria-sort", estado.ordemCrescente ? "ascending" : "descending");
    } else {
      th.removeAttribute("aria-sort");
    }
  });

  desenharGraficoColaboradores(lista);
}

/* =========================================================
   PARTE 5 — GRÁFICOS (Chart.js)
   ---------------------------------------------------------
   As cores vêm das variáveis do CSS. Assim, quando o tema
   muda, basta redesenhar os gráficos que eles acompanham.
   ========================================================= */

// Lê o valor de uma variável CSS, ex.: lerCor("--cor-jul")
function lerCor(variavel) {
  return getComputedStyle(document.documentElement).getPropertyValue(variavel).trim();
}

function chartDisponivel() {
  return typeof Chart !== "undefined";
}

// Destrói o gráfico antigo (se existir) e cria um novo no mesmo canvas
function criarGrafico(id, configuracao) {
  if (estado.graficos[id]) estado.graficos[id].destroy();
  estado.graficos[id] = new Chart(document.getElementById(id), configuracao);
}

// Configurações visuais comuns a todos os gráficos
function aplicarPadroesChart() {
  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  Chart.defaults.color = lerCor("--texto-2");
  Chart.defaults.borderColor = lerCor("--grade");
  Chart.defaults.maintainAspectRatio = false; // a altura vem do CSS
  Chart.defaults.plugins.tooltip.padding = 10;
}

// Eixos sem linha de grade na categoria e grade fininha no valor
function eixoValor(extra = {}) {
  return {
    beginAtZero: true,
    border: { display: false },
    grid: { color: lerCor("--grade") },
    ...extra,
  };
}

function eixoCategoria(extra = {}) {
  return {
    grid: { display: false },
    border: { color: lerCor("--grade") },
    ...extra,
  };
}

function desenharGraficoMensal(meses) {
  criarGrafico("grafico-mensal", {
    type: "bar",
    data: {
      labels: meses.map((m) => m.nome),
      datasets: [{
        label: "Total do mês",
        data: meses.map((m) => m.total),
        backgroundColor: meses.map((m) => lerCor(m.cor)), // cor fixa de cada mês
        borderRadius: 4,
        borderSkipped: "start", // arredonda só a ponta de cima
        maxBarThickness: 72,
      }],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => moeda(ctx.parsed.y) } },
      },
      scales: {
        x: eixoCategoria(),
        y: eixoValor({ ticks: { callback: (valor) => moedaEixo(valor) } }),
      },
    },
  });
}

function desenharGraficoDistribuicao(faixas) {
  criarGrafico("grafico-distribuicao", {
    type: "bar",
    data: {
      labels: faixas.map((f) => `${formatoNumero.format(f.de)}–${formatoNumero.format(f.ate)}`),
      datasets: [{
        label: "Colaboradores",
        data: faixas.map((f) => f.quantidade),
        backgroundColor: lerCor("--marca"),
        borderRadius: 4,
        borderSkipped: "start",
        barPercentage: 0.94,     // barras quase encostadas: cara de histograma
        categoryPercentage: 1,
      }],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (itens) => `Faixa de R$ ${itens[0].label}`,
            label: (ctx) => `${ctx.parsed.y} colaborador(es)`,
          },
        },
      },
      scales: {
        x: eixoCategoria({
          title: { display: true, text: "Total do trimestre (R$)" },
          ticks: { maxRotation: 0, autoSkip: true }, // rótulos retos; pula alguns se faltar espaço
        }),
        y: eixoValor({ ticks: { precision: 0 } }), // só números inteiros
      },
    },
  });
}

function desenharGraficoColaboradores(lista) {
  if (!chartDisponivel()) return;

  // A altura cresce com a quantidade de linhas (26px por colaborador)
  $("#caixa-grafico-colaboradores").style.height = `${Math.max(lista.length, 3) * 26 + 50}px`;

  const superficie = lerCor("--superficie");
  const ultimo = MESES.length - 1;

  criarGrafico("grafico-colaboradores", {
    type: "bar",
    data: {
      labels: lista.map((c) => nomeBonito(c.nome)),
      datasets: MESES.map((mes, i) => ({
        label: mes.nome,
        data: lista.map((c) => c[mes.chave]),
        backgroundColor: lerCor(mes.cor),
        // Borda da cor do fundo = um pequeno espaço entre os pedaços da barra
        borderColor: superficie,
        borderWidth: { right: 2 },
        borderSkipped: false,
        borderRadius: i === ultimo ? { topRight: 4, bottomRight: 4 } : 0,
        barPercentage: 0.8,
      })),
    },
    options: {
      indexAxis: "y", // barras deitadas
      plugins: {
        legend: { display: false }, // a legenda está no HTML, acima do gráfico
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${moeda(ctx.parsed.x)}`,
            footer: (itens) => `Total: ${moeda(somar(itens.map((i) => i.parsed.x)))}`,
          },
        },
      },
      scales: {
        x: eixoValor({
          stacked: true,
          position: "top",
          ticks: { maxRotation: 0, callback: (valor) => moedaEixo(valor) },
        }),
        y: eixoCategoria({ stacked: true }),
      },
    },
  });
}

function desenharGraficos() {
  if (!chartDisponivel()) return;
  aplicarPadroesChart();
  desenharGraficoMensal(estado.analise.resumo.meses);
  desenharGraficoDistribuicao(estado.analise.histograma);
  desenharGraficoColaboradores(filtrarRanking());
}

/* =========================================================
   PARTE 6 — INTERAÇÕES
   ========================================================= */

// 6.1 Ordenar o ranking ao clicar no título da coluna
function configurarOrdenacao() {
  $("#tabela-ranking thead").addEventListener("click", (evento) => {
    const botao = evento.target.closest("button[data-coluna]");
    if (!botao) return;

    const coluna = botao.dataset.coluna;
    if (estado.colunaOrdem === coluna) {
      estado.ordemCrescente = !estado.ordemCrescente; // mesma coluna: inverte
    } else {
      estado.colunaOrdem = coluna;
      // Texto e posição começam do menor; valores começam do maior
      estado.ordemCrescente = coluna === "nome" || coluna === "posicao";
    }
    renderizarRanking();
  });
}

// 6.2 Filtros de busca e de quantidade
function configurarFiltros() {
  $("#filtro-busca").addEventListener("input", (evento) => {
    estado.busca = evento.target.value;
    renderizarRanking();
  });

  $("#filtro-limite").addEventListener("change", (evento) => {
    estado.limite = Number(evento.target.value);
    renderizarRanking();
  });
}

// 6.3 Exportar o que está na tabela para CSV (abre direto no Excel)
function exportarCSV() {
  const lista = filtrarRanking();
  const numero = (v) => v.toFixed(2).replace(".", ","); // vírgula decimal (padrão BR)

  const linhas = [
    ["Posicao", "Colaborador", "Jul", "Ago", "Set", "Total", "Participacao %"],
    ...lista.map((c) => [
      c.posicao,
      nomeBonito(c.nome),
      numero(c.jul),
      numero(c.ago),
      numero(c.set),
      numero(c.total),
      numero(c.participacao * 100),
    ]),
  ];

  // ";" separa colunas no Excel brasileiro; "﻿" garante os acentos
  const conteudo = "﻿" + linhas.map((l) => l.join(";")).join("\n");
  const arquivo = new Blob([conteudo], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(arquivo);
  link.download = "ranking-produtividade.csv";
  link.click();
  URL.revokeObjectURL(link.href); // libera a memória
}

// 6.4 Tema claro/escuro
function temaAtual() {
  const escolhido = document.documentElement.dataset.theme;
  if (escolhido) return escolhido;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function configurarTema() {
  // Recupera a escolha salva (try/catch: o navegador pode bloquear o localStorage)
  try {
    const salvo = localStorage.getItem("tema");
    if (salvo) document.documentElement.dataset.theme = salvo;
  } catch (erro) {
    /* sem localStorage: segue o tema do sistema */
  }

  $("#botao-tema").addEventListener("click", () => {
    const novo = temaAtual() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try {
      localStorage.setItem("tema", novo);
    } catch (erro) {
      /* não conseguiu salvar: tudo bem, só não lembra na próxima visita */
    }
    desenharGraficos(); // os gráficos releem as cores do CSS
  });

  // Se o usuário trocar o tema do sistema com a página aberta
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", desenharGraficos);
}

// 6.5 Importar outra planilha .xlsx (mesmo formato: abas JUL, AGO e SET com NOME e Total)
async function importarPlanilha(arquivo) {
  if (typeof XLSX === "undefined") {
    throw new Error("A biblioteca de leitura de Excel não carregou. Verifique sua conexão.");
  }

  const pasta = XLSX.read(await arquivo.arrayBuffer());
  const dados = {};

  for (const mes of MESES) {
    const aba = pasta.Sheets[mes.aba];
    if (!aba) throw new Error(`A aba "${mes.aba}" não foi encontrada no arquivo.`);

    // header: 1 -> cada linha vira uma lista [colunaA, colunaB, ...]
    const linhas = XLSX.utils.sheet_to_json(aba, { header: 1, defval: null });
    dados[mes.campo] = linhas.slice(1).map((linha) => [linha[0], linha[1]]); // pula o cabeçalho
  }
  return dados;
}

function configurarImportacao() {
  $("#input-arquivo").addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];
    if (!arquivo) return;

    try {
      const dados = await importarPlanilha(arquivo);
      carregarDados(dados, `Arquivo importado: ${arquivo.name} (lido apenas no seu navegador).`);
    } catch (erro) {
      $("#fonte-dados").textContent = `Não foi possível ler a planilha: ${erro.message}`;
    } finally {
      evento.target.value = ""; // permite importar o mesmo arquivo de novo
    }
  });
}

/* =========================================================
   PARTE 7 — INICIALIZAÇÃO
   ========================================================= */

// Roda a análise e redesenha a página inteira
function carregarDados(dadosBrutos, textoFonte) {
  estado.analise = analisar(dadosBrutos);

  $("#fonte-dados").textContent = chartDisponivel()
    ? textoFonte
    : textoFonte + " (Os gráficos não carregaram; as tabelas continuam completas.)";

  renderizarKPIs(estado.analise.resumo);
  renderizarResumo(estado.analise.resumo);
  renderizarDestaques(estado.analise.destaques, estado.analise.qualidade);
  renderizarEstatisticas(estado.analise.estatisticas);
  renderizarQualidade(estado.analise);
  renderizarRanking();
  desenharGraficos();
}

function iniciar() {
  configurarTema();
  configurarOrdenacao();
  configurarFiltros();
  configurarImportacao();
  $("#botao-csv").addEventListener("click", exportarCSV);

  carregarDados(DADOS_EXEMPLO, TEXTO_FONTE_EXEMPLO);
}

// Com "defer" no HTML, o DOM já está pronto quando este arquivo roda
iniciar();
