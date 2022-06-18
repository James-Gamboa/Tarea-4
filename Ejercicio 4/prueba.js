let color = prompt("Digite el color del semaforo");

if (color == "rojo") {
  alert("ALTO");
} else if (color == "amarillo") {
  alert("PRECAUCION");
} else if (color == "verde") {
  alert("SIGA");
} else {
  alert(
    "NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA VERDE, AMARILLO, ROJO"
  );
}