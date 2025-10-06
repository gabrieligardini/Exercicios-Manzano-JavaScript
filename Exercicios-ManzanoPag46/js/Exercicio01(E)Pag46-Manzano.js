let base = 3
let expoente = 0

while (expoente <= 15) {
  let resultado = 1
  let contador = 1

  while (contador <= expoente) {
    resultado = resultado * base
    contador++
  }

  console.log(`${base} ^ ${expoente} = ${resultado}`)
  expoente++
}
