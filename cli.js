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
        nome,
        dataSorteio,
        premio,
        numConcurso,
        resultado,
        resultadoDuplaSena1,
        resultadoDuplaSena2,
      } = resultados[loteriaNome];
      if (nome == "Dupla Sena") {
        resultado = resultadoDuplaSena1 + "\n" + resultadoDuplaSena2;
      } else if (nome == "Loteca" || nome == "Lotogol") {
        let loteca = "";
        resultado.forEach(({ casa, casaGols, visitante, visitanteGols }) => {
          loteca +=
            casa +
            " " +
            casaGols +
            " x " +
            visitanteGols +
            " " +
            visitante +
            "\n";
        });
        resultado = loteca;
      }
      // esses ficaram muito grandes, para não estourar a tabela divido em duas linhas
      else if (nome == "Lotomania" || nome == "Lotofácil") {
        resultado =
          resultado.slice(0, resultado.length / 2).join(",") +
          "\n" +
          resultado.slice(resultado.length / 2).join(",");
      }
      table.push([nome, dataSorteio, premio, numConcurso, resultado]);
    });
    console.log(table.toString());
  },
  (err) => {
    console.error(err);
  }
);
