#!/usr/bin/env node

const buscaUltimosResultados = require("./index.js");
const Table = require("cli-table");

buscaUltimosResultados().then(
  (resultados) => {
    const table = new Table({
      head: [
        "Loteria",
        "Data do sorteio",
        "Prêmio",
        "Número do concurso",
        "Resultado",
      ],
      truncate: false,
    });
    Object.keys(resultados).forEach((loteriaNome) => {
      let {
        tipoJogo,
        dataApuracao,
        valorEstimadoProximoConcurso,
        numero,
        listaDezenas,
        listaDezenasSegundoSorteio,
        listaResultadoEquipeEsportiva,
      } = resultados[loteriaNome];

      const nome = loteriaNome;
      let resultado = listaDezenas;
      if (tipoJogo == "DUPLA_SENA") {
        resultado = listaDezenas + "\n" + listaDezenasSegundoSorteio;
      } else if (tipoJogo == "LOTECA") {
        let loteca = "";
        listaResultadoEquipeEsportiva.forEach(
          ({ nomeEquipeUm, nuGolEquipeUm, nomeEquipeDois, nuGolEquipeDois }) => {
            loteca +=
              nomeEquipeUm +
              " " +
              nuGolEquipeUm +
              " x " +
              nuGolEquipeDois +
              " " +
              nomeEquipeDois +
              "\n";
          }
        );
        resultado = loteca;
      }
      // esses ficaram muito grandes, para não estourar a tabela divido em duas linhas
      else if (tipoJogo == "LOTOMANIA" || tipoJogo == "LOTOFACIL") {
        resultado =
          resultado.slice(0, resultado.length / 2).join(",") +
          "\n" +
          resultado.slice(resultado.length / 2).join(",");
      }
      const premio = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorEstimadoProximoConcurso);

      table.push([nome, dataApuracao, premio, numero, resultado]);
    });
    console.log(table.toString());
  },
  (err) => {
    console.error(err);
  }
);
