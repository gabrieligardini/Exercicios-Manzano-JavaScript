let areaTotal = 0
let resposta = "SIM"

do {
  alert("Informe os dados do cômodo:")

  let nomeComodo = prompt("Nome do cômodo:")
  let largura = parseFloat(prompt(`Largura do(a) ${nomeComodo} (em metros):`))
  let comprimento = parseFloat(prompt(`Comprimento do(a) ${nomeComodo} (em metros):`))

  if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
    alert("Por favor, digite apenas valores numéricos positivos.")
  } else {
    let areaComodo = largura * comprimento
    alert(`Área do(a) ${nomeComodo}: ${areaComodo} m²`)
    areaTotal += areaComodo
  }

  resposta = prompt("Deseja informar outro cômodo? (SIM/NAO)")

} while (resposta === "SIM")

alert(`Área total da residência: ${areaTotal} m²`);
console.log(`Área total da residência: ${areaTotal} m²`);
