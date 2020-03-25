const knex = require('knex')
const configuration = require('../../knexfile')

// Criando a conection com o DB
const connection = knex(configuration.development);// OBS usando a configuração de desenvolvimento
module.exports = connection