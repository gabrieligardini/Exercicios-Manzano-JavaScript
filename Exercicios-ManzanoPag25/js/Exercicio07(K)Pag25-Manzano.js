let cotacao = parseFloat(prompt("Informe o valor da cotacão em R$:"));
let reais = parseFloat(prompt("Informe a quantidade de reais:"));

let converte_em_dolares = reais / cotacao;

alert("O valor em dólares é: $" + converte_em_dolares.toFixed(2));
