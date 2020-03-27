const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Rota para logar ONG
routes.post('/sessions', SessionController.create);

// Rotas para lisar e criar ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rota para buscar um perfil único de uma ONG
routes.get('/profile', ProfileController.index);


// Rotas para criar, lista e deletar casos de ONG's 
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;