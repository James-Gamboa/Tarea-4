let saludar = prompt("Digite un Hola");

if (saludar == "Hola") {
  alert("Hola,buen dia");
} else if (saludar == "hola") {
  alert("hola,buen dia");
} else if (saludar == "HOLA") {
  alert("HOLA,buen dia");
} else if (saludar == "ola") {
  alert("ola,buen dia");
}  else if (saludar == "hi") {
  alert("hi,buen dia");
}  else if (saludar == "hello") {
  alert("hello,buen dia");
}  else {
  alert(
    "NO SE INGRESO LOS VALORES CORRECTO, POR FAVOR RECARGUE LA PAGINA Y DIGITE UN HOLA"
  );
}