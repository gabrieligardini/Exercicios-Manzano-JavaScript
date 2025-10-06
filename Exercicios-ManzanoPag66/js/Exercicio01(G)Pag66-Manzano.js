let resultado = 1

for (let expoente = 0; expoente <= 15; expoente++) {
  if (expoente === 0) {
    resultado = 1
  } else {
    resultado *= 3
  }

  console.log(`3^${expoente} = ${resultado}`)
}
