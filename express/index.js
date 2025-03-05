const express = require("express") //importando o express

const app = express(); // iniciando o express



app.get('/', function(req, res){
    res.send("Bem vindo") // só pode enviar uma resposta se enviar outra ele corta a conexão com o cliente, a resposta pode ser uma mensagem um html , pdf

})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog")
})



app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal")
})



app.listen(8000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }
    else{
        console.log("Servidor iniciado com sucesso")
    }
})