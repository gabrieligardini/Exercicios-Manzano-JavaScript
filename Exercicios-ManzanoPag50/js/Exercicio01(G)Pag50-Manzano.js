let numeroAtual = 1

do {
  if (numeroAtual % 2 !== 0) {
    let fatorial = 1
    let contadorFatorial = 1

    do {
      fatorial *= contadorFatorial
      contadorFatorial++
    } while (contadorFatorial <= numeroAtual)

    console.log(`Fatorial de ${numeroAtual}: ${fatorial}`)
  }

  numeroAtual++;
} while (numeroAtual <= 10)
