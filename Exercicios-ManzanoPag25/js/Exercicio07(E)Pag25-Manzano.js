let valor = parseFloat(prompt("Informe o valor da prestação:"));
let taxa = parseFloat(prompt("Informe a taxa de juros (% ao mês):"));
let tempo = parseFloat(prompt("Informe o tempo de atraso (em meses):"));

let prestacao = valor + ((valor * taxa) / 100) * tempo;

alert("O valor da prestação em atraso é: " + prestacao.toFixed(2));
