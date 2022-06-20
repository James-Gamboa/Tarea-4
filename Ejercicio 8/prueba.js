let comida = prompt("Escoja de las siguiente opciones salado (1) pan de pizza o salado (2) pan con jamon y queso ( si quieres algo dulce digita X )");
let comidas = prompt("Escoja de las siguiente opciones dulce (1) flauta de guayaba (2) cacho de dulce de leche (3) pañuelo de crema pastelera ");
if (comida == "1") {
  alert("pan de pizza");
} else if (comida == "2") {
  alert("pan con jamon y queso");
} else if (comidas == "1") {
  alert("flauta de guayaba");
} else if (comidas == "2") {
  alert("cacho de dulce de leche");
} else if (comidas == "3") {
  alert("pañuelo de crema pastelera");
} else {
  alert("NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA SALADO O DULCE");
}