let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));
let n4 = parseInt(prompt("Digite o quarto número:"));

if (n1 % 2 === 0 && n1 % 3 === 0) {
  alert(`${n1} é divisível por 2 e 3`);
}

if (n2 % 2 === 0 && n2 % 3 === 0) {
  alert(`${n2} é divisível por 2 e 3`);
}

if (n3 % 2 === 0 && n3 % 3 === 0) {
  alert(`${n3} é divisível por 2 e 3`);
}

if (n4 % 2 === 0 && n4 % 3 === 0) {
  alert(`${n4} é divisível por 2 e 3`);
}

if (
  !(n1 % 2 === 0 && n1 % 3 === 0) &&
  !(n2 % 2 === 0 && n2 % 3 === 0) &&
  !(n3 % 2 === 0 && n3 % 3 === 0) &&
  !(n4 % 2 === 0 && n4 % 3 === 0)
) {
  alert("Nenhum número é divisível por 2 e 3.");
}
