let edad = prompt("¿Cuál es tu edad?");

// @ts-ignore
edad = Number(edad);

// @ts-ignore
if (edad >= 0 && edad < 3) {
  alert("Eres un bebe");
  // @ts-ignore
} else if (edad >= 4 && edad < 12) {
  alert("Eres un niño");
  // @ts-ignore
} else if (edad >= 12 && edad < 18) {
  alert("Eres un adolescente");
  // @ts-ignore
} else if (edad >= 18 && edad < 65) {
  alert("Eres un adulto");
  // @ts-ignore
} else if (edad == 65 && edad < 65) {
  alert("Eres un adulto mayor");
}
