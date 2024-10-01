//Define a URl base da API como http:localhost/api

const API_URL = 'http://localhost:3000/api';

//Função assicrona para fazer login do usuario
//Recebe o 'email' e 'password' como parametros

async function login(email, password) {
    try {
        //exibe no console os dados de login que serão enviados ao servidor
    console.log('Enviando dados para login:', {email, password});

    //envia uma requisição POST a API na rota 'auth/login'
    //A requisição inclui a um cabeçalho para indicar que o conteudo é JSON e envia o 'email' e 

    const response = await fetch(`${API_URL}` /auth/login, {
    method: 'POST', //Define o metodo HTML como POST
    headers:{
       ' Content-type': 'application/json'
    },
    body:JSON.stringify({email, password})
});

    //aguarda e converte a resposta do servidor para JSON
    const result = await response.json();

    //exibe no console resposta do servidor
    console.log('Resposta do servidor para login', result);
    
    //Retorna o resultado da requisisção

    return result;
    }catch(error) {
         //Captura qualquer erro que ocorra durante a requisição e exibe no console
         console.error('Erro ao fazer o login:', error);

         //Retorna um objeto com 'success:false' indicando que o login falhou

         return{success:false}
    }

}
        
    
    
 
