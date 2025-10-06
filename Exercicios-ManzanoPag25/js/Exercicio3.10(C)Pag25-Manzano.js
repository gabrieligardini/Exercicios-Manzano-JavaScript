let votosA = parseInt(
  prompt("Informe a quantidade de votos válidos do candidato A:")
);
let votosB = parseInt(
  prompt("Informe a quantidade de votos válidos do candidato B:")
);
let votosC = parseInt(
  prompt("Informe a quantidade de votos válidos do candidato C:")
);
let votosNulos = parseInt(prompt("Informe a quantidade de votos nulos:"));
let votosBrancos = parseInt(prompt("Informe a quantidade de votos em branco:"));

let totalEleitores = votosA + votosB + votosC + votosNulos + votosBrancos;

let percentualValidos = ((votosA + votosB + votosC) / totalEleitores) * 100;
let percentualA = (votosA / totalEleitores) * 100;
let percentualB = (votosB / totalEleitores) * 100;
let percentualC = (votosC / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualBrancos = (votosBrancos / totalEleitores) * 100;

alert(
  "RESULTADOS DA ELEIÇÃO SINDICAL\n\n" +
    "Total de eleitores: " +
    totalEleitores +
    "\nPercentual de votos válidos: " +
    percentualValidos.toFixed(2) +
    "%" +
    "\nPercentual de votos do candidato A: " +
    percentualA.toFixed(2) +
    "%" +
    "\nPercentual de votos do candidato B: " +
    percentualB.toFixed(2) +
    "%" +
    "\nPercentual de votos do candidato C: " +
    percentualC.toFixed(2) +
    "%" +
    "\nPercentual de votos nulos: " +
    percentualNulos.toFixed(2) +
    "%" +
    "\nPercentual de votos em branco: " +
    percentualBrancos.toFixed(2) +
    "%"
);
