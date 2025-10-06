let B = parseFloat(prompt("Informe a base (B):"));
let E = parseInt(prompt("Informe o expoente (E):"));

let resultado = 1;
let i = 1;

do {
  resultado = resultado * B;
  i++;
} while (i <= E);

alert(`O valor de ${B} elevado a ${E} é: ${resultado}`);
