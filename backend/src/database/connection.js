const knex = require('knex')
const configuration = require('../../knexfile')

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

// Criando a conection com o DB
const connection = knex(config);// OBS usando a configuração de desenvolvimento
module.exports = connection