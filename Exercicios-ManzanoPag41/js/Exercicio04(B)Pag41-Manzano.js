let numero = parseInt(prompt("Informe um número inteiro:"));

if (numero < 0) {
  numero = numero * -1;
}

alert("O valor absoluto do número informado é: " + numero);
