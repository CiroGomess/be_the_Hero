const express = require('express')
const routes = express.Router() // Modulo de Rotas 
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfilerController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SectionController')


// Rotas Login
routes.post('/sessions',SectionController.create)

// Rotas de Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rotas de Profiler
routes.get('/profile', ProfilerController.index )

// Rotas de incidents 
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete)

// Exportando arquivo / Rotas
module.exports = routes;

//=========== Métodos HTTP: ==========//
// GET: Buscar/listar uma informação do back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no bakc-end

//=========== Tipos de Parametros =========//
// Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
// Route Params: Parâmentos utilizados para endintificar recursos
// Request Body: Corpo da requisição, utilizando para criar ou alterar recuros