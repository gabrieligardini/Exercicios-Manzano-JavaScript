let A = parseFloat(prompt("Informe o valor de A:"));
let B = parseFloat(prompt("Informe o valor de B:"));
let C = parseFloat(prompt("Informe o valor de C:"));

let quadrado_soma = (A + B + C) ** 2;

alert(
  "Valores informados:" +
    "\nA = " +
    A +
    "\nB = " +
    B +
    "\nC = " +
    C +
    "\n\nO quadrado da soma é: " +
    quadrado_soma.toFixed(2)
);
