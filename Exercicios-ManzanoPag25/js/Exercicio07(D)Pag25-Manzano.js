let tempo = parseFloat(prompt("Informe o tempo gasto: "));
let velocidade_media = parseInt(prompt("Informe a velocidade média: "));

let distancia_percorrida = tempo * velocidade_media;
let litros_usados = distancia_percorrida / 12;

alert(
  "Para a sua viagem possui as seguintes informações: " +
    "\nVelocidade média: " +
    velocidade_media +
    "Km/H" +
    "\nTempo Gasto: " +
    tempo +
    "h" +
    "\nDistância Percorrida: " +
    distancia_percorrida +
    "Km" +
    "\nLitros Utilizados: " +
    litros_usados +
    "L"
);
