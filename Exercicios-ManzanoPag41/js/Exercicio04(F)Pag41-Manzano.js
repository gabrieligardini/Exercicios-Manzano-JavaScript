let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));
let menor, meio, maior;

if (a <= b && a <= c) {
  menor = a;
  if (b <= c) {
    meio = b;
    maior = c;
  } else {
    meio = c;
    maior = b;
  }
} else if (b <= a && b <= c) {
  menor = b;
  if (a <= c) {
    meio = a;
    maior = c;
  } else {
    meio = c;
    maior = a;
  }
} else {
  menor = c;
  if (a <= b) {
    meio = a;
    maior = b;
  } else {
    meio = b;
    maior = a;
  }
}

alert(`Os valores em ordem crescente são: ${menor}, ${meio}, ${maior}`);
