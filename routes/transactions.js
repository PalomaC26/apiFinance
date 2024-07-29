const express = require('express'); //Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importar o controlad

//Definir uma rota obter todas as transações
router.get('./',transactionsController.getAllTransactions);

//Exportando o roteador

module.exports = router;