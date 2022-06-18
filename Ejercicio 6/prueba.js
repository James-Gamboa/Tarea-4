// @ts-nocheck

let operacion = prompt("¿Qué operación desea? 1-Sumar 2-Restar 3-Multiplicar 4-Dividir.");
let operando1 = parseInt (prompt("Introduce el primer número: "));
let operando2 = parseInt (prompt ("Introduce el segundo número: "));
let resultado;

//funcion de suma
function suma(numero1, numero2){
  return numero1 + numero2;
}

//funcion de resta
function resta(numero1, numero2){
  return numero1 - numero2;
}

//funcion de multiplicar
function multiplicar(numero1, numero2){
  return numero1 * numero2;
}

//funcion de dividir
function dividir(numero1, numero2){
  return numero1 / numero2;
}

//llamadas y resultados
switch(operacion){
  case "1":
  resultado = suma(operando1, operando2);
  document.write("El valor de la suma es:" +resultado);
  break;


case "2":
resultado = resta(operando1, operando2);
document.write("El valor de la resta es:" +resultado);
break;


case "3":
resultado = multiplicar(operando1, operando2);
document.write("El valor de la multiplicacion es:" +resultado);
break;


case "4":
resultado = dividir(operando1, operando2);
document.write("El valor de la division es:" +resultado);
break;

default:
  alert("La opción especificada no es correcta");
  break;
}