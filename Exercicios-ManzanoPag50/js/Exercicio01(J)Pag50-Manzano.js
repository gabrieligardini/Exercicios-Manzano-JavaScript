let dividendo = parseInt(prompt("Digite o dividendo:"))
let divisor = parseInt(prompt("Digite o divisor:"))

if (divisor === 0) {
  alert("Erro: divisão por zero não é permitida.")
  console.log("Erro: divisão por zero não é permitida.")
} else {
  let quociente = 0
  let resto = dividendo

  do {
    resto -= divisor
    quociente++
  } while (resto >= divisor)

  console.log(`Quociente inteiro da divisão: ${quociente}`)
  alert(`Quociente inteiro da divisão: ${quociente}`)
}
