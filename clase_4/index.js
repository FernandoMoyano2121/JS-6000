/* 
funtion nombreDeLaFuncion(){
//codigo que quiero procesar

}
*/

/* let num1 = 9;
let num2 = 10;

sumaDeNumeros = num1 + num2;
console.log(sumaDeNumeros); */

/* function sumaDeNumeros() {
  let num1 = 9;
  let num2 = 10;

  sumaDeNumeros = num1 + num2;
  console.log(sumaDeNumeros);
}

sumaDeNumeros();

sumaDeNumeros()
/*  */

/* function sumarNumeros(num1, num2) {
  const resultadoDeSuma = num1 + num2;
  console.log(resultadoDeSuma);
}

sumarNumeros(9, 7);
sumarNumeros(10, 20); */
/* 
function sumarNumeros(num1, num2) {
  return num1 + num2;
}

let resultadoDeMiSuma = sumarNumeros(6, 9);
console.log(resultadoDeMiSuma);

function saludar(mensaje) {
  console.log(`Hola ${mensaje}`);
}

saludar("como estas?");

saludar("lwjfwaklf");
 */

/* function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;

    case "-":
      return primerNumero - segundoNumero;

    case "*":
      return primerNumero * segundoNumero;

    case "/":
      return primerNumero / segundoNumero;

    default:
      return 0;
  }
}

console.log(calculadora(10, 9, "/"));
 */

//var variable = 9; //variable de alcance global

/* let resultado = 0;

function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
}

sumar(5, 7);
console.log(resultado);
 */

/* function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero - segundoNumero;
}

console.log(resultado); */

/* let nombre = "Fernando";

function saludar() {
  let nombre = "Juan";
  console.log(nombre);
}

console.log(nombre);

saludar();
 */

/* function sumar(a, b) {
  let resultado = a + b;
  return console.log(resultado);
}

function resta(a, b) {
  let resultado = a - b;
  return console.log(resultado);
}

sumar(9, 8);
resta(19, 4); */

/* function suma(){

} */

/* const suma = function (a, b) {
  return console.log(a + b);
};

suma(7, 10); */

/* const resta = (a, b) => a - b;

const suma = function (a, b) {
  return a + b;
};

const calculoIva = (precio) => {
  const precioConIva = precio * 0.21;
  return precioConIva;
};

const precioProducto1 = calculoIva(30000);
console.log(precioProducto1);

const precioProducto2 = calculoIva(suma(10, 20));
console.log(precioProducto2);

const precioProducto3 = calculoIva(resta(30, 10));
console.log(precioProducto3);
 */

const aplicarDescuento = (precio, descuento) => {
  const precioConDescuento = precio - (precio * descuento) / 100;
  return precioConDescuento;
};

const calcularImpuestos = (precio) => {
  precioConImpuestos = precio + precio * 0.21;
  return precioConImpuestos;
};

let totalDeProductos = 0;
let agregar = confirm("Quieres agregar un producto ?");

while (agregar) {
  let precioDelProducto = parseFloat(
    prompt("Por Favor Ingresa el precio del producto")
  );

  if (!isNaN(precioDelProducto) && precioDelProducto > 0) {
    const precioConIva = calcularImpuestos(precioDelProducto);
    totalDeProductos += precioConIva;
    alert("Producto agregado satisfactoriamente");
    agregar = confirm("Quieres agregar otro producto ?");
  } else {
    alert("Precio Invalido");
  }
}

if (totalDeProductos > 0) {
  let descuento = parseFloat(prompt("Por favor ingresa el monto de descuento"));

  const precioFinal = aplicarDescuento(totalDeProductos, descuento);
  alert(`El monto final de la compra es de ${precioFinal}`);
} else {
  alert("no has agregado ningun producto");
}
