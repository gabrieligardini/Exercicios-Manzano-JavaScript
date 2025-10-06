let n = 1;
let resultado = "";

do {
  if (n % 2 !== 0) {
    let fatorial = 1;
    let i = 1;
    do {
      fatorial *= i;
      i++;
    } while (i <= n);
    resultado += `Fatorial de ${n} é: ${fatorial}\n`;
  }
  n++;
} while (n <= 10);

alert(resultado);
