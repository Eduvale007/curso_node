function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a -b;
}

function multi(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}



//module.exports = soma; exemplo caso queira exportar apenas uma função

module.exports = {  // exporta todas as funções
    soma,
    subtracao,
    multi,
    div
}