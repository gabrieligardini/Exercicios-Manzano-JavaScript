let contadora = 1
let soma = 0

do {
    if (contadora % 2 == 0){
        soma += contadora
    }
    contadora++
}while (contadora <= 500)
    console.log("A soma dos números pares de 1 até 500 é: " + soma)