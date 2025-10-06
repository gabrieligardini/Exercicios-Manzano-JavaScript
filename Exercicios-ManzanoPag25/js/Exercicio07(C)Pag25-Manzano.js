let raio = parseFloat(prompt("Informe o raio da lata de óleo:"));
let altura = parseFloat(prompt("Informe a altura da lata de óleo:"));

let volume = Math.PI * raio ** 2 * altura;

alert("O valor do volume da lata de óleo é: " + volume.toFixed(2));
