
const http = require("http")

http.createServer(function(resquicao,resposta){
     resposta.end("<h1>FODA-SE</h1>")
}).listen(8181)

console.log("Servidor rodando")