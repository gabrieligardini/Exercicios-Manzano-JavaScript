let A = parseFloat(prompt("Informe o valor de A:"));
let B = parseFloat(prompt("Informe o valor de B:"));
let C = parseFloat(prompt("Informe o valor de C:"));

let soma_quadrados = A ** 2 + B ** 2 + C ** 2;

alert(
  "Valores informados:" +
    "\nA = " +
    A +
    "\nB = " +
    B +
    "\nC = " +
    C +
    "\n\nA soma dos quadrados é: " +
    soma_quadrados.toFixed(2)
);
