let r = require("readline-sync");
let nome = r.question("Digite o seu nome:");
console.log(`Olá , ${nome}`);

let texto = "";

do {
    texto = r.question("Digite algo ou para sair digite - Tchau: ");
    console.log(`Você digitou: ${texto}`);

}while(texto =! "Tchau")

console.log(`Tchau , ${nome}`);
    
    

