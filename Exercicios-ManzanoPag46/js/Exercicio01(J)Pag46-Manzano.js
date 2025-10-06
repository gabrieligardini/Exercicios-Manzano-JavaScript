let numero = 50
let soma = 0
let contadorPares = 0

while (numero <= 70) {
  if (numero % 2 === 0) {
    soma = soma + numero
    contadorPares++
  }
  numero++
}

let media = soma / contadorPares

console.log("A soma dos valores pares de 50 a 70 é: " + soma)
console.log("A média aritmética desses valores é: " + media)
