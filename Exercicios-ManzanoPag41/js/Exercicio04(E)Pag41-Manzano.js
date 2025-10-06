let A = parseFloat(prompt("Informe o valor de A:"));
let B = parseFloat(prompt("Informe o valor de B:"));
let C = parseFloat(prompt("Informe o valor de C:"));

if (A === 0) {
  alert(
    "O valor de A deve ser diferente de zero. A equação não é de segundo grau."
  );
} else {
  let delta = B ** 2 - 4 * A * C;

  if (delta < 0) {
    alert(
      "Valores informados:" +
        "\nA = " +
        A +
        "\nB = " +
        B +
        "\nC = " +
        C +
        "\n\nDelta = " +
        delta.toFixed(2) +
        "\nNão existem raízes reais"
    );
  } else {
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);

    alert(
      "Valores informados:" +
        "\nA = " +
        A +
        "\nB = " +
        B +
        "\nC = " +
        C +
        "\n\nDelta = " +
        delta.toFixed(2) +
        "\nRaiz X₁ = " +
        x1.toFixed(2) +
        "\nRaiz X₂ = " +
        x2.toFixed(2)
    );
  }
}
