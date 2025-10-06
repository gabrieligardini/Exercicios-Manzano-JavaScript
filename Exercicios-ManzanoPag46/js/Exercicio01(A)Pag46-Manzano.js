//Exercicio Estrutura de Repetição Enquanto-While Manzano 01
let numero = parseInt(prompt("Digite um número maior que zero: "))
let contadora = 0

while (contadora < 11) {
    console.log(numero + " x " + contadora + " = " + (numero * contadora))
    contadora = contadora + 1
}