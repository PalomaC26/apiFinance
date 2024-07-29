//Importar a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); // importar o pacote mysql para conectar ao Banco De Dados
// Exibe as variáveis de ambiente carregadas
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
//depois pode apagar

const db = mysql.createConnection({
 host:process.env.DB_HOST, //Endereço do servidor de Banco De Dados
 user:process.env.DB_USER,  //Nome de ususario para acessar o Banco de Dados
 password:process.env.DB_PASS, //senha do usuario paar acessar o Banco de dados
 database:process.env.DB_NAME //nome de Banco de Dados
});

db.connect((err) => {
    if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); // Exibe mensagem de erro
    return;
    }
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`); // Exibe mensagem de sucesso
    });
    module.exports = db; // Exporta a conexão para ser usada em outros arquivos