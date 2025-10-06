let primeiraEntrada = true
let numeroAtual
let maiorValor, menorValor

do {
  numeroAtual = parseFloat(prompt("Digite um valor positivo (ou negativo para sair):"))

  if (numeroAtual >= 0) {
    if (primeiraEntrada) {
      maiorValor = numeroAtual
      menorValor = numeroAtual
      primeiraEntrada = false
    } else {
      if (numeroAtual > maiorValor) {
        maiorValor = numeroAtual
      }
      if (numeroAtual < menorValor) {
        menorValor = numeroAtual
      }
    }
  }

} while (numeroAtual >= 0)

if (!primeiraEntrada) {
  console.log(`Maior valor informado: ${maiorValor}`)
  console.log(`Menor valor informado: ${menorValor}`)
  alert(`Maior valor informado: ${maiorValor}\nMenor valor informado: ${menorValor}`)
} else {
  console.log("Nenhum valor positivo foi informado.")
  alert("Nenhum valor positivo foi informado.") 
}
