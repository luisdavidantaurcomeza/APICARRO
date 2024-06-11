//routes.js
const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
// Defina suas rotas aqui
// Exemplo:
// router.get('/carros', CarroController.getAllCarros);
router.get('/carros', CarroController.buscarTodos);
router.get('/carros/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.excluir);

module.exports = router;