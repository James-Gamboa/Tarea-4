let comida = prompt("Digite si quiere algo salado o dulce");
let salado = prompt("pan de pizza,pan con jamon y queso");
let dulce = prompt("flauta de guayaba, cacho de dulce de leche,pañuelo de crema pastelera");

if (salado == "pan de pizza") {
  alert("pan de pizza");
} else if (salado == "pan con jamon y queso") {
  alert("pan con jamon y queso");
} else if (dulce == "flauta de guayaba") {
  alert("flauta de guayaba");
} else if (dulce == "cacho de dulce de leche") {
  alert("cacho de dulce de leche");
} else if (dulce == "pañuelo de crema pastelera") {
  alert("pañuelo de crema pastelera");
} else {
  alert(
    "NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA BUENOS DIAS, BUENAS TARDES, BUENAS NOCHES"
  );
}
