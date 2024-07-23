const express = require('express'); //importa o framework express
const dotenv = require('dotenv'); //importa o pacote dotenv para grenciar variaveis de ambiente
const cors = require('cors');  //import o pacote cors para permitir requisitos de diferentes origens
const bodyParser = require('body-parser'); //importa o pacote body-parse para analisar o corpo das requisições http



//Configurar variaveis de ambiente

dotenv.config(); //Carrega as variaveisdefinidas no arquivo '.env' para process.env(processos)


//inicializar nova aplicação Express

const app = express();

//configurar o CORS e o bay-parse

app.use(cors()); //habilita o cors para todas as rotas
app.use(bodyParser.json()); // configura o body-parse para analisar requisições JSQN


//Rota inicial para testar o servidor 

app.get('/',(req, res)=> {
    res.send('Servidor está rodando'); //definir uma rota para testar o servidor
});

//configurar o servidor para uma porta especifica

const PORT = process.env.PORT || 3000; //defini a porta a partir da variavel e ambiente ou usa a porta 3000 como padrao
app.listen(PORT,()=> {
    console.log(`Servidor rodando na porta ${PORT}`); //envia uma mensaggem que o servidor esta rodando na $PORT em quem estiver
});