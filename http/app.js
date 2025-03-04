//criado um servidor http

const http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("Hello World");
}).listen(8000);


console.log("Servidor rodando na porta 8000");

