// esto es un comentario de una linea

/* comentario linea multiple */

/* =====================================
=         NOMBRES DE VARIABLES         =
===================================== */

var nombre = "Fernando";
let nombre = "Agustin";
const nombre2 = "Jualian";

//camel case
let miNombre = "Oscar";
//pascal case
let MiNombre = "Nicola";
//snake case
let mi_nombre = "Julia";

/* Importante usar nombres nemónicos, que coincidan 
con el valor que se está guardadndo */
let numero = "Agustin"; // X

let miNombre1 = "Fernando"; // ✓
let miNumero = 8; // ✓

//no usar espacios ni caracteres especiales

/* =====================================
=           PALABRAS RESERVADAS        =
===================================== */

/* 
break / case / catch / continue
default / let / delete / do / while / else / finally / if /
in / instanceof / new / return /switch / this / throw / try 
typeof / var / void / while / with / 
*/

/* =====================================
=          TIPOS DE DATOS              =
===================================== */

//Primitivos___

//string
let miString = "lskfgalskjg";

//number

let myNumber = 32;
let myNumber1 = 32.5;

//boolen

const miVerdad = true;
const miMentira = false;

//null

let sinDato = null;

//undefined

let miNombre2;
console.log(miNombre);

//NAN

//typeof me permite ver el tipo de dato

let suma = "Fernando" + 4;
console.log(typeof suma);

//compuestos___

let myObject = {};
console.log(typeof myObject);

let myArray = [];
console.log(typeof myArray);

//function

let myFuncion = () => {};

//bigin

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

/* =====================================
=               OPERADORES              =
===================================== */

//Operadores Artitméticos____

//suma +
//resta -
//multiplicación *
//división /
//modulo %
//incremento ++
//decremento --

//Aritmeticos asignación____

//adición +=

let numeroD = 5;
console.log(numeroD);
numeroD++;
console.log(numeroD);

numeroD += 1;
console.log(numeroD);

let numeroE = 5;
console.log(numeroE);
console.log(typeof numeroE);

//operadores logicos____

//AND logico   &&
//OR lógico  ||
//NOT logico !

//operadores Relaciones____

//Igual a  ==
//No igual  !=
// Igual estricta ===
//desigualda estricta !==
//Mayor que >
//Menor que <
//MAyor o igual >=
//Menor o igual que <=

let numeroF = 10;
let numeroG = 20;

let resultados = numeroA * numeroB;
console.log(resultados);

let myNombre = "Fernando";
let myApellido = "Moyano";

let nombreCompleto = myNombre + myApellido;
console.log(nombreCompleto);

/* =====================================
=               LET Y CONST            =
===================================== */

var myName = "Fernando";

miNombre = "Julian";
console.log(miNombre); //🎯permitido pero no recomendado

let myName = "Fernando";
myName = "Julian";
console.log(myNombre); //Permitido ✓ en ambitos de bloque

//Ambito de Bloque función
function myFunction() {
  let myName1 = "Agustin";
}

console.log(myName1); //🎯myName1 is not defined no se puede acceder ya que let tiene ambito de bloque


//🎯🎯🎯🎯
// No se puede reasignar valor
const myNombre3 = "Fernando";
myNombre3 = "Julian";//Error : Assignment to constant variable.

//La declaracion con const necesita ser inicializada con un valor
const myNombre4 //Error: Missing initializer in const declaration



/* =====================================
=         Funciones Integradas         =
===================================== */



/* =====================================
=               prompt()                =
===================================== */


//El siguiente ejemplo es valido , el mismo retorna un string ✓
let nombre = prompt("Por favor ingresa tu nombre");
console.log(nombre);

let edad = prompt("Por favor Ingresa tu edad");
console.log(edad);

console.log(typeof edad);


/* El siguiente ejemplo es valido, pero no retorna una suma 
si no una union de los caracteres que posteriormente se transforman
a numero */
let numeroA = prompt("Ingresa tu primer numero");
let numeroB = prompt("Ingresa tu segundo numero");

let resultado = numeroA + numeroB;


console.log(parseInt(resultado)); 



/* =====================================
=               alert()                =
===================================== */

/* Este ejemplo devuelve una suma como tal manejando los 
datos como numeros por medio de la conversion con parseInt ✓  */  
let yourNumber = parseInt(prompt("Ingresa tu primer numero"));
let yourNumber2 = parseInt(prompt("Ingresa tu segundo numero"));

let resultadoComoNumero = numeroA + numeroB;

alert(resultado); 
