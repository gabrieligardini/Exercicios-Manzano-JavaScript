let A = parseInt(prompt("Informe o valor de A:"));
let B = parseInt(prompt("Informe o valor de B:"));
let C = parseInt(prompt("Informe o valor de C:"));
let D = parseInt(prompt("Informe o valor de D:"));

let soma_a_com_b = A + B;
let soma_a_com_c = A + C;
let soma_a_com_d = A + D;
let soma_b_com_c = B + C;
let soma_b_com_d = B + D;
let soma_c_com_d = C + D;

let multiplica_a_com_b = A * B;
let multiplica_a_com_c = A * C;
let multiplica_a_com_d = A * D;
let multiplica_b_com_c = B * C;
let multiplica_b_com_d = B * D;
let multiplica_c_com_d = C * D;

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
    "\n\nResultados das SOMAS:" +
    "\nA + B = " +
    soma_a_com_b +
    "\nA + C = " +
    soma_a_com_c +
    "\nA + D = " +
    soma_a_com_d +
    "\nB + C = " +
    soma_b_com_c +
    "\nB + D = " +
    soma_b_com_d +
    "\nC + D = " +
    soma_c_com_d +
    "\n\nResultados das MULTIPLICAÇÕES:" +
    "\nA * B = " +
    multiplica_a_com_b +
    "\nA * C = " +
    multiplica_a_com_c +
    "\nA * D = " +
    multiplica_a_com_d +
    "\nB * C = " +
    multiplica_b_com_c +
    "\nB * D = " +
    multiplica_b_com_d +
    "\nC * D = " +
    multiplica_c_com_d
);
