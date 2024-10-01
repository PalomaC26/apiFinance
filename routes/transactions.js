const express = require('express'); // Importa o módulo 'express', um framework web para Node.js, utilizado para criar e gerenciar servidores e rotas de maneira simples e eficiente.
const router = express.Router(); // Cria um novo roteador, um novo objeto 'router' usando o método 'Router()' do Express, que será utilizado para definir e organizar rotas da aplicação de forma modular.
const transactionsController = require('../controllers/transactionsController'); // Importa o 'transactionsController', que contém as funções responsáveis por gerenciar as operações de transações, como adicionar, atualizar, obter e excluir transações.
const authMiddleware = require('../middlewares/authMiddleware'); // Importa o 'authMiddleware', responsável por verificar a autenticação do usuário antes de permitir o acesso a determinadas rotas protegidas.


// Definindo uma rota para obter todas as transações
router.get('/', authMiddleware, transactionsController.getAllTransactions);


//Definindo uma rota para adicionar uma nova transação
router.post('/', authMiddleware, transactionsController.addTransaction);


//Definindo uma rota para atualizar uma trasação existente(substituição completa)
router.put('/:id', authMiddleware, transactionsController.updateTransactionPut);


//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.patch('/:id', authMiddleware, transactionsController.updateTransactionPatch);


//Definindo uma rota para deletar uma transação
router.delete('/:id', authMiddleware, transactionsController.deleteTransaction);


// Exporta o objeto 'router' para que ele possa ser utilizado em outros arquivos da aplicação, permitindo o acesso às rotas definidas neste módulo.
module.exports = router;