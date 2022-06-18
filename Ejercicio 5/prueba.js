// @ts-ignore
let saludar = prompt("Digite un buenos dias,buenas tardes o buenas noches");

if (saludar == "buenos dias") {
  alert("buenos dias");
} else if (saludar == "buenas tardes") {
  alert("buenas tardes");
} else if (saludar == "buenas noches") {
  alert("buenas noches");
} else {
  alert(
    "NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y ESCRIBA BUENOS DIAS, BUENAS TARDES, BUENAS NOCHES"
  );
}
