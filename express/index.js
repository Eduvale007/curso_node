const express = require("express") //importando o express

const app = express(); // iniciando o express



app.get('/', function(req, res){
    
    res.send("Bem vindo") // só pode enviar uma resposta se enviar outra ele corta a conexão com o cliente, a resposta pode ser uma mensagem um html , pdf

})


//parametro não obrigatorio
app.get("/blog/:artigo?", function(req, res){

const artigo = req.params.artigo

if(artigo){
    res.send("bem vindo ao artigo")
}
else{
    res.send("bem vindo ao blog")
}

})



app.get("/canal/youtube", function(req, res){
    const canal = req.query["canal"] //não tão usado query params não é tão seguro
        if(canal){
            res.send(canal)
        }
        else{
            res.send("nenhum canal")
        }
})


// exemplo parametro obrigatorio 
app.get("/ola/:nome/:empresa", function(req,res){ //requisicao serve para pegar os dados enviados pelo usuario e resposta o que vai ser enviada para o usuario/ para declarar um parametro e necessario /:qualquer nome que eu quiser

    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send("<h1> oi" + nome + "</h1>" + "<h1> sua empresa é: " + empresa + "</h1>")
})


app.listen(8000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }
    else{
        console.log("Servidor iniciado com sucesso")
    }
})