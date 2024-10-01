const express = require('express'); // Importa o módulo 'express', um framework web para Node.js, utilizado para criar e gerenciar servidores e rotas de maneira simples e eficiente.
const router = express.Router(); // Cria um novo roteador, um novo objeto 'router' usando o método 'Router()' do Express, que será utilizado para definir e organizar rotas da aplicação de forma modular.
const authController = require('../controllers/authController'); // Importa o 'authController', responsável por gerenciar as operações relacionadas à autenticação, como login, registro e verificação de tokens.


// Define uma rota POST para '/register', que chama a função 'registerUser' do 'authController' para registrar um novo usuário.
router.post('/register', authController.registerUser);


// Define uma rota POST para '/login', que chama a função 'loginUser' do 'authController' para autenticar um usuário.
router.post('/login', authController.loginUser);


// Define uma rota POST para '/request-password-reset', que chama a função 'requestPasswordReset' do 'authController' para iniciar o processo de redefinição de senha.
router.post('/request-password-reset', authController.requestPasswordReset);


// Define uma rota POST para '/reset-password', que chama a função 'resetPassword' do 'authController' para redefinir a senha do usuário.
router.post('/reset-password', authController.resetPassword);


// Exporta o objeto 'router' para que ele possa ser utilizado em outros arquivos da aplicação, permitindo o acesso às rotas definidas neste módulo.
module.exports = router;