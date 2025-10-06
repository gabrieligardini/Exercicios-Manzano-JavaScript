let comprimento = parseFloat(prompt("Informe o comprimento da caixa: "));
let largura = parseFloat(prompt("Informe a largura da caixa: "));
let altura = parseFloat(prompt("Informe a altura da caixa: "));

let volume = comprimento * largura * altura;

alert("O volume da caixa é: " + volume.toFixed(2));
