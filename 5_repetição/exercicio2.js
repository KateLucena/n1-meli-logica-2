let estrela = " ";
let r = require("readline-sync");
let qtde = parseInt(r.question("Digite a quantidade de estrelas:"));
for(let i = 0; i < qtde; i++ ){
    estrela += "*";
    console.log(estrela);
}
