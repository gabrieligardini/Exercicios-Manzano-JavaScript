let nome = prompt("Digite seu nome:");
let sexo = prompt(
  "Digite seu sexo (M para masculino / F para feminino):"
).toUpperCase();

if (sexo === "M") {
  alert(`Ilmo Sr. ${nome}`);
} else if (sexo === "F") {
  alert(`Ilma Sra. ${nome}`);
} else {
  alert("Sexo inválido! Por favor, digite M ou F.");
}
