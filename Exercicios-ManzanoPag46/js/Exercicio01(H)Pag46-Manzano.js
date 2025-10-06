let celsius = 10

console.log("Conversão de Celsius para Fahrenheit (10°C a 100°C):")

while (celsius <= 100) {
  let fahrenheit = (9 * celsius / 5) + 32
  console.log(`${celsius} °C = ${fahrenheit} °F`)
  celsius += 10
}
