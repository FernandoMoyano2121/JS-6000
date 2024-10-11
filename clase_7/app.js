/* =====================================
=      operaciones aritmeticas         =
===================================== */

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

console.log(sumar(5, 3)); // 8
console.log(multiplicar(5, 3)); // 15

/* En este caso, si quisiéramos agregar más operaciones 
(por ejemplo, restar o dividir), tendríamos que seguir 
creando más funciones, una para cada operación. */

/* Ahora veamos cómo podemos mejorar este código usando 
**funciones de orden superior**. En lugar de tener una 
función separada para cada operación, podemos escribir
 **una sola función** que recibe otra función como parámetro, 
 y esa función nos indicará qué operación queremos realizar. */

// Función de orden superior que acepta otra función para realizar la operación
function operar(a, b, operacion) {
  return operacion(a, b);
}

// Función para sumar
function sumar(a, b) {
  return a + b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

console.log(operar(5, 3, sumar)); // 8
console.log(operar(5, 3, multiplicar)); // 15

/* =====================================
=     Ejemplo verificacion de edad      =
===================================== */

/* En este caso, cada vez que tengamos que validar 
una nueva actividad (por ejemplo, conducir), tendríamos 
que crear una nueva función con la lógica correspondiente. */

/* Función para verificar si la persona tiene edad suficiente para votar */
function puedeVotar(edad) {
  return edad >= 18;
}

/* Función para verificar si la persona tiene edad suficiente 
para beber alcohol */
function puedeBeber(edad) {
  return edad >= 21;
}

console.log(puedeVotar(20)); // true
console.log(puedeBeber(20)); // false

/* =====================================
= Ejemplo verificación de edad Mejorado =
===================================== */

/* En lugar de crear funciones separadas para cada validación, 
podemos hacer que una sola función (`verificarEdad`) 
reciba como argumento la validación que queremos aplicar. */

/* Función de orden superior que acepta una condición para 
verificar la edad */
function verificarEdad(edad, condicion) {
  return condicion(edad);
}

// Función para verificar si puede votar
function esMayorDeEdadParaVotar(edad) {
  return edad >= 18;
}

// Función para verificar si puede beber alcohol
function esMayorDeEdadParaBeber(edad) {
  return edad >= 21;
}

console.log(verificarEdad(20, esMayorDeEdadParaVotar)); // true
console.log(verificarEdad(20, esMayorDeEdadParaBeber)); // false

/* =====================================
=     Ejemplo descuento Ecommerce      =
===================================== */

/* Imaginemos que en un e-commerce queremos aplicar diferentes 
tipos de descuentos a nuestros productos, como descuentos 
del **10%**, del **20%** o un **descuento personalizado**. */

// Función para aplicar un descuento del 10%
function aplicarDescuento10(precio) {
  return precio * 0.9; // Aplica un 10% de descuento
}

// Función para aplicar un descuento del 20%
function aplicarDescuento20(precio) {
  return precio * 0.8; // Aplica un 20% de descuento
}

console.log(aplicarDescuento10(100)); // 90
console.log(aplicarDescuento20(100)); // 80

/* Ahora veamos cómo podemos hacer esto más flexible usando una 
función de orden superior. Crearemos una única función que toma 
como argumento el porcentaje de descuento que queremos aplicar. */

// Función de orden superior que acepta un porcentaje de descuento
function aplicarDescuento(precio, calcularDescuento) {
  return calcularDescuento(precio);
}

// Función para calcular un 10% de descuento
function descuento10(precio) {
  return precio * 0.9;
}

// Función para calcular un 20% de descuento
function descuento20(precio) {
  return precio * 0.8;
}

console.log(aplicarDescuento(100, descuento10)); // 90
console.log(aplicarDescuento(100, descuento20)); // 80

/* =====================================
=    Funciones pasadas como parametros  =
===================================== */

function porCadaUno(arr, fn) {
  for (const el of arr) {
    fn(el);
  }
}

const numeros = [1, 2, 3, 4];
porCadaUno(numeros, console.log);

/* =======================================
=   Ejemplo ampliado con funcion "acumular"=
========================================= */

let total = 0;

function acumular(numero) {
  total += numero;
}

porCadaUno(numeros, acumular);
console.log(total);

/* ===============================================
=    Ejemplo de multiplicacion "por cada uno"    =
=============================================== */

//definimos un nuevoArray
const nuevoArray = [];

function porCadaUno(arr, funcion) {
  for (let elemento of arr) {
    funcion(elemento);
  }
}

function multiplicar(elemento) {
  nuevoArray.push(elemento * 2);
}

console.log(porCadaUno(numeros, multiplicar));
console.log(nuevoArray);

/* =====================================
=   Mismo ejemplo con arrow functions   =
===================================== */

porCadaUno(numeros, (el) => {
  nuevoArray.push(el * 2);
});

console.log(nuevoArray); // [2, 4, 6, 8]

/* =====================================
=               forEach()                =
===================================== */

const numeros1 = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
  console.log(num);
});

/* =====================================
=               find()                =
===================================== */

const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

const resultado1 = cursos.find((el) => el.nombre === "ReactJS");
const resultado2 = cursos.find((el) => el.nombre === "DW");

console.log(resultado1); // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2); // undefined

/* =====================================
=               filter()                =
===================================== */

const resultado3 = cursos.filter((el) => el.nombre.includes("JS"));
const resultado4 = cursos.filter((el) => el.precio < 14000);

console.log(resultado3);
console.log(resultado4);

/* =====================================
=               some()                =
===================================== */

console.log(cursos.some((el) => el.nombre == "Desarrollo Web"));
// true

console.log(cursos.some((el) => el.nombre == "VueJS"));
// false

/* =====================================
=               map()                =
===================================== */

const nombres = cursos.map((el) => el.nombre);
console.log(nombres);

/* =====================================
=               reducer()                =
===================================== */

const numeros2 = [1, 2, 3, 4, 5, 6];

const total1 = numeros2.reduce(
  (acumulador, elemento) => acumulador + elemento,
  0
);

console.log(total1); // 21**

/* =====================================
=               sort()                =
===================================== */

const numeros3 = [40, 1, 5, 200];

numeros3.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]
numeros3.sort((a, b) => b - a); // [ 200, 40, 5, 1 ]**
console.log(numeros3);

/* =====================================
=    Ejemplo aplicado a Ecommerce       =
===================================== */

const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const buscado = productos.find((producto) => producto.id === 3);
console.log(buscado); //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some((producto) => producto.nombre === "Harina");
console.log(existe); // false

const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos);

// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map((producto) => producto.nombre);
console.log(listaNombres);

//[“Arroz”, “Fideo”, “Pan”, “Flan”]
