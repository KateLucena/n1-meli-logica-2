
let passos = 0;
let r = require("readline-sync");
const meta = 500;


while(passos < meta){
       
    passos += parseInt(r.question("Informe a quantidade de passos:"));
    
}
console.log(`Parabéns! Você atingiu a meta: ${passos}`); 