//Importar a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); // importar o pacote mysql para conectar ao Banco De Dados

mysql.createConnection({
  host:process.env.DB_HOST, //Endereço do servidor de Banco De Dados
 user:process.env.DB_USER,  //Nome de ususario para acessar o Banco de Dados
 password:process.env.DB_PASS, //senha do usuario paar acessar o Banco de dados
 database:process.env.DB_NAME //nome de Banco de Dados
});

db.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao Banco De Dados' , err); //Exibe a mensagem de erro
    return;
}
    console.log('Conectado ao Banco de Dados Mysql'); // Exibe a mensagem de sucesso

});

module.exports=db; //Exporta a conexão para er usada em outros arquivos