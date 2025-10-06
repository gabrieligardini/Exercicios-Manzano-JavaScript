let numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para parar): "))

if (numero < 0) {
  alert("Nenhum número positivo foi informado.")
} else {
  let maior = numero
  let menor = numero

  while (numero >= 0) {
    numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para parar): "))
    if (numero >= 0) {
      if (numero > maior) maior = numero
      if (numero < menor) menor = numero
    }
  }

  alert("O maior valor informado foi: " + maior)
  alert("O menor valor informado foi: " + menor)
}
