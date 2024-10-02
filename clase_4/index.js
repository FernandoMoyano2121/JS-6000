/* =====================================
=               Ejemplo Saludo         =
===================================== */

const saludo = "Hola como estás?";
console.log(saludo);

function saludar() {
  console.log("¡Hola estudiantes!");
}

/* =====================================
=        Ejemplo Suma básica           =
===================================== */

let num1 = 9;
let num2 = 8;
const resultado = num1 + num2;
console.log(resultado);

function sumarNumeros() {
  let num1 = 7;
  let num2 = 9;
  resultado = num1 + num2;
  console.log(resultado);
}
//El resultado es impreso por consola pero nunca es devuelto.

sumarNumeros();

/* Es una mejora comparada con el ejemplo anterior ya que el código 
solo lo escribo una vez y no necesito volver a escribirlo, solo llamarlo. */

/* =====================================
=    Suma Básica con parametros        =
===================================== */

//Con parametros es decir Dinámico
function sumarNumeros(num1, num2) {
  const resultadoDeLaSuma = num1 + num2;
  console.log(resultadoDeLaSuma);
}

sumarNumeros(9, 8);

//El metodo se ejecuta solo cuando se llama

/* La función puede comportarse como una operación que genera 
valores (como en las operaciones matemáticas y lógicas previas). 

En el espacio donde se llama a la función se genera un nuevo valor: 
este valor es el definido por el return de la misma. */

function sumarNumeros(num1, num2) {
  return num1 + num2;
}

let resultadoDeLaSuma = sumarNumeros(5, 9);
console.log(resultadoDeLaSuma);

/* =====================================
=        Ejemplo Calculadorea          =
===================================== */

function calculadora(primerNumero, segundoNumero, operacion) {
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

console.log(calculadora(10, 5, "*"));

/* =====================================
=          Scope Global                =
===================================== */

let resultadoDeSuma = 0;

function sumar(primerNumero, segundoNumero) {
  resultadoDeSuma = primerNumero + segundoNumero;
}

sumar(5, 6);

//Se puede acceder a la variable resultado porque es global
console.log(resultadoDeSuma);
/* En este ejemplo puedo hacer referencia a resultado desde 
cualquier parte de mi programa. */

/* =====================================
=               Scope Local             =
===================================== */

function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
}

//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado);

/* =====================================
=      Variables locales y globales     =
===================================== */

let nombre = "John Doe"; // variable global

function saludar() {
  let nombre = "Juan Coder"; // variable local
  console.log(nombre);
}

//Accede a nombre global
console.log(nombre); // → “John Doe”
//Accede a nombre local
saludar(); // → “Juan Coder”**

/* ===============================================
= VAriables con mismo nombre en scopes diferentes =
=============================================== */

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

/* =====================================
=               Funciones anonimas      =
===================================== */
/* Una función anónima es una función que se define sin 
nombre y se utiliza para ser pasada como parámetro o asignada 
a una variable. En el caso de asignarla a una variable, 
pueden llamar usando el identificador de la variable declarada. */

const suma = function (a, b) {
  return a + b;
};

console.log(suma(4, 9));

/* =====================================
=       Fucniones flecha                =
===================================== */

const suma1 = (a, b) => {
  return a + b;
};

/* Si es una función de una sola línea con retorno
podemos evitar escribir el cuerpo. */

const resta1 = (a, b) => a - b;
console.log(suma1(15, 20));
console.log(resta1(20, 5));

/* =====================================
=        Ejemplo calculo IVA           =
===================================== */

//const suma = (a, b) => a + b;

const suma2 = (a, b) => {
  return a + b;
};

const resta2 = (a, b) => a - b;

const calculoIva = (precio) => {
  const precioConIva = precio * 0.21;
  return precioConIva;
};

let nuevoProducto = calculoIva(suma2(56, 4));
let nuevoProducto1 = calculoIva(resta2(134, 9));

/* =====================================
=       Ejemplo IVA + Descuento       =
===================================== */

const aplicarDescuento = (precio, descuento) => {
  precioConDescuento = precio - (precio * descuento) / 100;
  return precioConDescuento;
};

const calcularImpuestos = (precio) => {
  precioConImpuestos = precio + precio * 0.21;
  console.log(precioConImpuestos);
  return precioConImpuestos;
};

let totalDeProductos = 0;
let agregar = confirm("quieres agregar un producto");

while (agregar) {
  let precioDelProducto = parseFloat(
    prompt("Por favor ingresa el precio del producto")
  );

  if (!isNaN(precioDelProducto) && precioDelProducto > 0) {
    const precioConIva = calcularImpuestos(precioDelProducto);
    totalDeProductos += precioConIva;
    alert("producto agregado satisfactoriamente");

    agregar = confirm("Quires agregar otro producto?");
  } else {
    alert("Precio invalido");
  }
}

if (totalDeProductos > 0) {
  let descuento = parseFloat(
    prompt("por favor ingresa el porcentaje de descuento")
  );

  const precioFinal = aplicarDescuento(totalDeProductos, descuento);
  alert(`El precio final de tu compra es : ${precioFinal}`);
} else {
  alert("No has agregado ningun producto");
}
