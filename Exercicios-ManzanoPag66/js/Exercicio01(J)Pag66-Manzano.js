let c = 10;
let resultado = "Celsius | Fahrenheit\n";

do {
  let f = (9 * c + 160) / 5;
  resultado += `${c}°C    | ${f.toFixed(2)}°F\n`;
  c += 10;
} while (c <= 100);

alert(resultado);
