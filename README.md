# @humbhenri/cx_loteria

[![npm (scoped)](https://img.shields.io/npm/v/@humbhenri/cx_loteria.svg)](https://github.com/humbhenri/cx_loteria)

Work In Progress

API dos resultados das loterias da Caixa.

Exemplo de uso:

```
const buscaUltimosResultados = require('@humbhenri/cx_loteria');
buscaUltimosResultados().then(resultado => {
    console.log(JSON.stringify(resultado))
});
```

Saída:

```
{
   "Quina":{
      "nome":"Quina",
      "premio":"R$ 140 Milhões",
      "dataSorteio":"24/06/2019",
      "resultado":[
         "17",
         "27",
         "53",
         "78",
         "79"
      ],
      "numConcurso":"5002"
   },
   "Lotofácil":{
      "nome":"Lotofácil",
      "premio":"R$ 2 Milhões",
      "dataSorteio":"24/06/2019",
      "resultado":[
         "02",
         "04",
         "05",
         "08",
         "09",
         "10",
         "12",
         "14",
         "16",
         "18",
         "19",
         "20",
         "21",
         "22",
         "23"
      ],
      "numConcurso":"1831"
   },
   "Mega-Sena":{
      "nome":"Mega-Sena",
      "premio":"R$ 2,5 Milhões",
      "dataSorteio":"22/06/2019",
      "resultado":[
         "11",
         "16",
         "22",
         "30",
         "34",
         "42"
      ],
      "numConcurso":"2162"
   },
   "Dupla Sena":{
      "nome":"Dupla Sena",
      "premio":"R$ 1,7 Milhão",
      "dataSorteio":"22/06/2019",
      "numConcurso":"1951",
      "resultadoDuplaSena1":[
         "05",
         "09",
         "32",
         "37",
         "41",
         "49"
      ],
      "resultadoDuplaSena2":[
         "10",
         "19",
         "26",
         "33",
         "35",
         "46"
      ]
   },
   "Timemania":{
      "nome":"Timemania",
      "premio":"R$ 4,5 Milhões",
      "dataSorteio":"22/06/2019",
      "resultado":[
         "22",
         "38",
         "41",
         "44",
         "51",
         "52",
         "70"
      ],
      "numConcurso":"1347",
      "timeCoracao":"CSA/AL"
   },
   "Dia de Sorte":{
      "nome":"Dia de Sorte",
      "premio":"R$ 2,7 Milhões",
      "dataSorteio":"22/06/2019",
      "resultado":[
         "06",
         "07",
         "11",
         "19",
         "22",
         "23",
         "25"
      ],
      "numConcurso":"166",
      "mes":"Setembro"
   },
   "Loteria Federal":{
      "nome":"Loteria Federal",
      "premio":"R$ 500 Mil",
      "dataSorteio":"22/06/2019",
      "resultado":[
         "37117",
         "71539",
         "80239",
         "46873",
         "78405"
      ],
      "numConcurso":"5399"
   },
   "Lotomania":{
      "nome":"Lotomania",
      "premio":"R$ 400 Mil",
      "dataSorteio":"21/06/2019",
      "resultado":[
         "00",
         "01",
         "08",
         "09",
         "11",
         "15",
         "16",
         "27",
         "54",
         "58",
         "61",
         "63",
         "67",
         "68",
         "69",
         "78",
         "79",
         "89",
         "93",
         "95"
      ],
      "numConcurso":"1980"
   },
   "Loteca":{
      "nome":"Loteca",
      "premio":"R$ 200 Mil",
      "dataSorteio":"12/06/2019",
      "resultado":[
         {
            "casa":"Brasil",
            "casaGols":"03",
            "visitanteGols":"00",
            "visitante":"Bolívia"
         },
         {
            "casa":"Venezuela",
            "casaGols":"00",
            "visitanteGols":"00",
            "visitante":"Peru"
         },
         {
            "casa":"Argentina",
            "casaGols":"00",
            "visitanteGols":"02",
            "visitante":"Colômbia"
         },
         {
            "casa":"Paraguai",
            "casaGols":"02",
            "visitanteGols":"02",
            "visitante":"Qatar"
         },
         {
            "casa":"Uruguai",
            "casaGols":"04",
            "visitanteGols":"00",
            "visitante":"Equador"
         },
         {
            "casa":"Botafogo/RJ",
            "casaGols":"00",
            "visitanteGols":"01",
            "visitante":"Grêmio/RS"
         },
         {
            "casa":"Fortaleza/CE",
            "casaGols":"02",
            "visitanteGols":"01",
            "visitante":"Cruzeiro/MG"
         },
         {
            "casa":"CSA/AL",
            "casaGols":"00",
            "visitanteGols":"02",
            "visitante":"Flamengo/RJ"
         },
         {
            "casa":"Internacional/RS",
            "casaGols":"03",
            "visitanteGols":"01",
            "visitante":"Bahia/BA"
         },
         {
            "casa":"Santos/SP",
            "casaGols":"01",
            "visitanteGols":"00",
            "visitante":"Corinthians/SP"
         },
         {
            "casa":"Vasco",
            "casaGols":"da",
            "visitanteGols":"01",
            "visitante":"X"
         },
         {
            "casa":"Atlético/MG",
            "casaGols":"01",
            "visitanteGols":"01",
            "visitante":"São"
         },
         {
            "casa":"Chapecoense/SC",
            "casaGols":"01",
            "visitanteGols":"01",
            "visitante":"Fluminense/RJ"
         },
         {
            "casa":"Goiás/GO",
            "casaGols":"02",
            "visitanteGols":"01",
            "visitante":"Athlético/PR"
         }
      ],
      "numConcurso":"857"
   },
   "Lotogol":{
      "nome":"Lotogol",
      "premio":"R$ 400 Mil",
      "dataSorteio":"01/06/2019",
      "resultado":[
         {
            "casa":"Botafogo/RJ",
            "casaGols":"1",
            "visitanteGols":"0",
            "visitante":"Vascodagama/RJ"
         },
         {
            "casa":"Sãopaulo/SP",
            "casaGols":"1",
            "visitanteGols":"1",
            "visitante":"Cruzeiro/MG"
         },
         {
            "casa":"Chapecoense/SC",
            "casaGols":"1",
            "visitanteGols":"2",
            "visitante":"Palmeiras/SP"
         },
         {
            "casa":"Bahia/BA",
            "casaGols":"1",
            "visitanteGols":"0",
            "visitante":"Grêmio/RS"
         },
         {
            "casa":"Flamengo/RJ",
            "casaGols":"2",
            "visitanteGols":"0",
            "visitante":"Fortaleza/CE"
         }
      ],
      "numConcurso":"1054"
   }
}
```
