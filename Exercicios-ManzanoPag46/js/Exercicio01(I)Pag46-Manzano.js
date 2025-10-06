let contador = 1
let soma = 0

while (contador <= 10) {
  let numero = parseFloat(prompt("Digite o " + contador + "º valor: "))
  soma = soma + numero
  contador++
}

let media = soma / 10

console.log("O somatório dos valores é: " + soma)
console.log("A média aritmética é: " + media)
