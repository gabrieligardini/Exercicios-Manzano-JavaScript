let cotacao = parseFloat(prompt("Informe o valor da cotacão em R$:"));
let dolares = parseFloat(prompt("Informe a quantidade de dólares:"));

let converte_em_real = cotacao * dolares;

alert("O valor em reais é: R$" + converte_em_real.toFixed(2));
