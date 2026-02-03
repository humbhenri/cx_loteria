const axios = require('axios');
const UserAgents = require('user-agents');

const userAgent = new UserAgents();
axios.defaults.headers.common['User-Agent'] = userAgent.toString();

const loterias = [
    'megasena',
    'lotofacil',
    'quina',
    'lotomania',
    'duplasena',
    'timemania',
    'diadesorte',
    'federal',
    'loteca',
    'maismilionaria',
    'supersete',
];

const baseURL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/';

const nomeLoteria = {
    MEGA_SENA: 'Mega-Sena',
    LOTOFACIL: 'Lotofácil',
    QUINA: 'Quina',
    LOTOMANIA: 'Lotomania',
    DUPLA_SENA: 'Dupla Sena',
    TIMEMANIA: 'Timemania',
    DIA_DE_SORTE: 'Dia de Sorte',
    LOTERIA_FEDERAL: 'Loteria Federal',
    LOTECA: 'Loteca',
    MAIS_MILIONARIA: 'Mais Milionária',
    SUPER_SETE: 'Super Sete',
};

function buscaUltimosResultados() {
    const promises = loterias.map(loteria => axios.get(`${baseURL}${loteria}`));

    return Promise.all(promises).then(responses => {
        const resultados = {};
        responses.forEach(response => {
            const data = response.data;
            const nome = nomeLoteria[data.tipoJogo];
            if (nome) {
                resultados[nome] = data;
            }
        });
        return resultados;
    });
}

module.exports = buscaUltimosResultados;
