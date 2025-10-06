let soma = 0
for (let contadora = 1; contadora <= 500; contadora++) {
    if (contadora % 2 == 0) {
        soma += contadora
    }
}
console.log("A soma dos números pares de 1 até 500 é: " + soma)