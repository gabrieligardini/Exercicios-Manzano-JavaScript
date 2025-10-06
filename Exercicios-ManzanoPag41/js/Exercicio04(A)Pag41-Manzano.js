let valor1 = parseInt(prompt("Informe o primeiro valor inteiro:"));
let valor2 = parseInt(prompt("Informe o segundo valor inteiro:"));

let diferenca;

if (valor1 > valor2) {
  diferenca = valor1 - valor2;
} else {
  diferenca = valor2 - valor1;
}

alert("A diferença do maior pelo menor é: " + diferenca);
