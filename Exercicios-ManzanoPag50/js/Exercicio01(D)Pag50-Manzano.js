let contadora = 1
let multiplicacao = 1
let totalGraos = 1

console.log(totalGraos)

do{
    totalGraos = totalGraos + multiplicacao
    multiplicacao = multiplicacao * 2
    console.log(multiplicacao)
    contadora++
}while (contadora < 65)
    console.log("o total de grãos é de: " + totalGraos)