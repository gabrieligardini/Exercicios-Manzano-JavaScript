let areaTotal = 0
let resposta = "SIM"

while (resposta.toUpperCase() === "SIM") {
  let nomeComodo = prompt("Digite o nome do cômodo:");
  let largura = parseFloat(prompt("Digite a largura do cômodo (m):"))
  let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m):"))

  let areaComodo = largura * comprimento;
  alert("A área do(a) " + nomeComodo + " é: " + areaComodo + " m²")

  areaTotal += areaComodo

  resposta = prompt("Deseja calcular a área de outro cômodo? (SIM/NAO)")
}

alert("A área total da residência é: " + areaTotal + " m²")
