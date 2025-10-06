let base = parseInt(prompt("Digite o valor da base: "))
let expoente = parseInt(prompt("Digite o valor do expoente: "))
let resultado = 1
let contador = 1

while (contador <= expoente) {
  resultado = resultado * base
  contador++
}

console.log(`${base} ^ ${expoente} = ${resultado}`)
