let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));
let n4 = parseInt(prompt("Digite o quarto número:"));
let n5 = parseInt(prompt("Digite o quinto número:"));

let maior = n1;
let menor = n1;

if (n2 > maior) maior = n2;
if (n2 < menor) menor = n2;

if (n3 > maior) maior = n3;
if (n3 < menor) menor = n3;

if (n4 > maior) maior = n4;
if (n4 < menor) menor = n4;

if (n5 > maior) maior = n5;
if (n5 < menor) menor = n5;

alert(
  `Valores informados: ${n1}, ${n2}, ${n3}, ${n4}, ${n5}` +
    `\nMaior número: ${maior}` +
    `\nMenor número: ${menor}`
);
