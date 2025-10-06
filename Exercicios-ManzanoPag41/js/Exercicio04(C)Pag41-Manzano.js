let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));
let nota3 = parseFloat(prompt("Informe a terceira nota:"));
let nota4 = parseFloat(prompt("Informe a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
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
      "\nSituação: Aprovado"
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
      "\n\nMédia = " +
      media.toFixed(2) +
      "\nSituação: Reprovado"
  );
}
