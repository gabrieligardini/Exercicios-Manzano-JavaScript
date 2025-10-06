let A = parseInt(prompt("Informe o valor de A:"));
let B = parseInt(prompt("Informe o valor de B:"));
let C = parseInt(prompt("Informe o valor de C:"));
let D = parseInt(prompt("Informe o valor de D:"));

let P1 = A * C;
let P2 = A * D;
let S = B + D;

alert(
  "Valores informados:" +
    "\nA = " +
    A +
    "\nB = " +
    B +
    "\nC = " +
    C +
    "\nD = " +
    D +
    "\n\nProduto do primeiro pelo terceiro (A * C): " +
    P1 +
    "\nProduto do primeiro pelo quarto (A * D): " +
    P2 +
    "\nSoma do segundo com o quarto (B + D): " +
    S
);
