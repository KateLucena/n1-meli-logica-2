//resposta aqui

var produtos = [
    {nome:"Melancia", validade: 100, congelado: false},
    {nome:"Arroz", validade: 300, congelado: false},
    {nome:"Frango", validade: 200, congelado: true}
]
//console.log(produtos[0]);

var r = require("readline-sync");

var posic = parseInt(r.question("Escolha um produto entre 0 até 2:"));
var prodValid = parseInt(r.question("Digite quantos dias faltam para o produto vencer:"));
var prodSelect = produtos[posic];
var porcent = (prodValid * 100) / prodSelect.validade;

if(porcent <= 2){
    console.log("Descartar produto, muito proximo de vencer");
} else if(porcent > 2 && porcent <= 10 && prodSelect.congelado == false){
    console.log("Desconto!  Produto não congelado e próximo da validade.");
} else if(porcent > 2 && porcent <= 5 && prodSelect.congelado == true){
    console.log("Desconto! Produto congelado e próximo da validade.");
} else{
    console.log("Produto longe do vencimento.");
}