let SM = parseFloat(prompt("Informe o salário mensal:"));
let PR = parseFloat(prompt("Informe o percentual de reajuste:"));

let NS = SM + (SM * PR) / 100;

alert(
  "Salário atual: R$ " +
    SM.toFixed(2) +
    "\nPercentual de reajuste: " +
    PR.toFixed(2) +
    "%" +
    "\n\nNovo salário: R$ " +
    NS.toFixed(2)
);
