//resposta aqui
function somar(v1, v2) {
    return v1 + v2;
}

function subtrair(v1, v2) {
    return v1 - v2;
}

function multiplicar(v1, v2) {
    return v1 * v2;
}
function dividir(v1, v2) {
    return v1 / v2;
}

//var teste = dividir(5,2);
//console.log(teste);

var r = require("readline-sync");

var operacao = r.question("Qual operação deseja realizar? (+) , (-) ,(*) , (/):");
var valor1 = parseInt(r.question("Digite o primeiro valor:"));
var valor2 = parseInt(r.question("Digite o segundo valor:"));
var resultado;

switch (operacao) {
    case "+":
        resultado = somar(valor1, valor);
        console.log(`O resultado  da operação ${operacao} é  ${resultado}.`);
        break;
    case "-":
        resultado = subtrair(valor1, valor2);
        console.log(`O resultado  da operação ${operacao} é  ${resultado}.`);
        break;
    case "*":
        resultado = multiplicar(valor1, valor2);
        console.log(`O resultado  da operação ${operacao} é  ${resultado}.`);
        break;
    case "/":
        resultado = dividir(valor1, valor2);
        console.log(`O resultado  da operação ${operacao} é  ${resultado}.`);
        break
    default:
        console.log("Operação inválida");
}