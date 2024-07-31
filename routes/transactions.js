const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador de transações 

// Definindo uma rota para obter todas as transações 
router.get('/', transactionsController.getAllTransactions); 

// Definindo uma rota para adicionar uma nova transação 
router.post('/', transactionsController.addTransaction); 

//Definindo uma rota para atualizar uma transaçaõ existente(Substituição completa)
router.put('/:id', transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma transaçaõ existente(Substituição parcial)
//router.patch('/:id', transactionsController.updateTransactionPatch);

 

// Exportando o roteador 
module.exports = router; 