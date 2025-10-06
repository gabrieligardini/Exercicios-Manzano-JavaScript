let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));
let nota3 = parseFloat(prompt("Informe a terceira nota:"));
let nota4 = parseFloat(prompt("Informe a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
  alert(
    "Notas informadas:" +
      "\nNota 1 = " +
      nota1 +
      "\nNota 2 = " +
      nota2 +
      "\nNota 3 = " +
      nota3 +
      "\nNota 4 = " +
      nota4 +
      "\n\nMédia = " +
      media.toFixed(2) +
      "\nSituação: Aprovado direto"
  );
} else {
  let exame = parseFloat(prompt("Média abaixo de 7. Informe a nota do exame:"));
  let novaMedia = (media + exame) / 2;

  if (novaMedia >= 5) {
    alert(
      "Notas informadas:" +
        "\nNota 1 = " +
        nota1 +
        "\nNota 2 = " +
        nota2 +
        "\nNota 3 = " +
        nota3 +
        "\nNota 4 = " +
        nota4 +
        "\nNota do exame = " +
        exame +
        "\n\nMédia inicial = " +
        media.toFixed(2) +
        "\nNova média = " +
        novaMedia.toFixed(2) +
        "\nSituação: Aprovado em exame"
    );
  } else {
    alert(
      "Notas informadas:" +
        "\nNota 1 = " +
        nota1 +
        "\nNota 2 = " +
        nota2 +
        "\nNota 3 = " +
        nota3 +
        "\nNota 4 = " +
        nota4 +
        "\nNota do exame = " +
        exame +
        "\n\nMédia inicial = " +
        media.toFixed(2) +
        "\nNova média = " +
        novaMedia.toFixed(2) +
        "\nSituação: Reprovado"
    );
  }
}
