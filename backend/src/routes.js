const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const routes = express.Router() // Modulo de Rotas 
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfilerController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SectionController')

// Rotas Login
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), SectionController.create)

// Rotas de Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    //validações de dados
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

// Rotas de Profiler
routes.get('/profile', celebrate({
    //validações de dados
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfilerController.index)


// Rotas de incidents 
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), IncidentsController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete)

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