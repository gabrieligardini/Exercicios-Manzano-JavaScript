let contador = 1
let somaTotalFatoriais = 0

do {
  let numeroAtual = parseInt(prompt(`Digite o ${contador}º número inteiro:`))
  let fatorial = 1
  let i = 1

  do {
    fatorial *= i
    i++;
  } while (i <= numeroAtual)

  console.log(`Fatorial de ${numeroAtual}: ${fatorial}`)

  somaTotalFatoriais += fatorial
  contador++

} while (contador <= 15)

console.log(`Somatório total dos fatoriais: ${somaTotalFatoriais}`)
