let termo1 = 1
let termo2 = 1
let contador = 3

document.write("Série de Fibonacci até o 15º termo:<br>")
document.write(termo1 + "<br>")
document.write(termo2 + "<br>")

while (contador <= 15) {
  let proximo = termo1 + termo2
  document.write(proximo + "<br>")
  termo1 = termo2
  termo2 = proximo
  contador++
}
