const dotenv = require('dotenv'); // Importa o módulo 'dotenv', que carrega variáveis de ambiente de um arquivo '.env' para dentro de 'process.env', permitindo o uso de variáveis de ambiente na aplicação.
dotenv.config();// Carrega as variáveis de ambiente do arquivo '.env' para o 'process.env', tornando-as acessíveis em toda a aplicação.

//Importar as Bibliotecas

const express = require('express'); // Importa o módulo 'express', um framework web para Node.js, utilizado para criar e gerenciar servidores e rotas de maneira simples e eficiente.
const cors = require('cors'); // Importa o módulo 'cors', que será utilizado para habilitar o Cross-Origin Resource Sharing (CORS), permitindo que a aplicação receba requisições de diferentes origens.
const bodyParser = require('body-parser'); // Importa o módulo 'body-parser', que será utilizado para processar e converter o corpo das requisições HTTP em formatos como JSON, facilitando o acesso aos dados enviados no 'req.body'.
const db = require('./config/db'); // Importa a configuração da conexão com o banco de dados a partir do arquivo 'db' localizado na pasta 'config'.

// Importa as rotas de transações

const transactionsRoutes = require('./routes/transactions'); // Importa as rotas de transações a partir do arquivo 'transactions.js' localizado na pasta 'routes', para gerenciar as operações relacionadas a transações na aplicação.
const authRoutes = require('./routes/auth'); // Importa as rotas de autenticação do arquivo 'auth.js' na pasta 'routes', que define as rotas para operações como login, registro e recuperação de senha.


//inicializar nova aplicação Express

const app = express(); // Cria uma instância do aplicativo Express, chamada 'app', que será usada para configurar o servidor, definir rotas e gerenciar requisições HTTP.


//configurar o CORS e o bady-Parse

app.use(cors()); // Habilita o middleware 'cors' em toda a aplicação, permitindo que ela aceite requisições de diferentes origens (Cross-Origin Resource Sharing).
app.use(bodyParser.json()); // Configura o middleware 'body-parser' para processar requisições com o corpo no formato JSON, permitindo que o conteúdo seja acessado através de 'req.body'.


// Usar as rotas de transações para todas as requisições que começam com /api/transactions
app.use('/api/transactions', transactionsRoutes); // Configura o middleware para as rotas de transações, prefixando todas as rotas de 'transactionsRoutes' com '/api/transactions'.
app.use('/api/auth', authRoutes); // Configura o middleware para as rotas de autenticação, prefixando todas as rotas de 'authRoutes' com '/api/auth'.


// Servir arquivos estáticos da pasta 'public'

app.use(express.static('public')); // Configura o middleware 'express.static' para servir arquivos estáticos (como HTML, CSS, JS, imagens) da pasta 'public'.


//Rota inicial para testar o servidor

/*app.get('/', (req, res) => {
  res.send(`Servidor está rodando na porta ${PORT}`); // Define uma rota inicial para testar o servidor
});*/


// Define uma rota GET para o caminho raiz ('/'), que envia o arquivo 'index.html' da pasta 'public' como resposta ao cliente.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Servir o arquivo index.html como a página inicial
});


//Configurar o servidor para uma porta específica

// Define a porta na qual o servidor irá rodar, usando a variável de ambiente 'PORT' (se definida) ou, caso contrário, a porta 3000. 
// Inicia o servidor e exibe no console a mensagem indicando que ele está rodando na porta especificada.

const PORT = process.env.PORT || 3000; // Define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Loga uma mensagem informando que o servidor está rodando
});