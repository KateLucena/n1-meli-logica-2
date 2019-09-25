//resposta aqui

//var r = require("readline-sync");

// var a = parseInt(r.question("Digite 1 ou 2"));

// console.log(a);



let posic;
let porcent;

let r = require("readline-sync");

let produto = [
    {nome:"TV", valor:3000},
    {nome:"Sofá", valor:2500},
    {nome:"Mesa", valor:900},
]
posic = parseInt(r.question("Escolha um produto entre 0 e 2:"));
porcent = parseInt(r.question("Digite a porcentagem de desconto entre 0 a 50:"));
let produtoselect = produto[posic];  
let desc = produtoselect.valor  * (porcent/100);

console.log("Produto " + produtoselect.nome + " com desconto é R$ " + desc.toFixed(2));