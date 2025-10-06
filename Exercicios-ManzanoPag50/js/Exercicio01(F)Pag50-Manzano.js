let somaTotal = 0
let contador = 0
let numeroAtual

do {
  numeroAtual = parseFloat(prompt("Digite um valor positivo (ou negativo para sair):"))

  if (numeroAtual >= 0) {
    somaTotal += numeroAtual
    contador++
  }

} while (numeroAtual >= 0)

if (contador > 0) {
  let media = somaTotal / contador
  console.log(`Total de valores lidos: ${contador}`)
  console.log(`Somatório dos valores: ${somaTotal}`)
  console.log(`Média aritmética dos valores: ${media}`)
  alert(
    `Total de valores lidos: ${contador}\n` +
    `Somatório dos valores: ${somaTotal}\n` +
    `Média aritmética: ${media.toFixed(2)}`
  );
} else {
  console.log("Nenhum valor positivo foi informado.")
  alert("Nenhum valor positivo foi informado.")
}
