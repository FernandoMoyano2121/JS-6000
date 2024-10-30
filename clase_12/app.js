/* =====================================
=               Sugar Syntax                =
===================================== */
/* Es el nombre que se le da a los operadores avanzados 
que funcionan 
como simplificaciones de tareas más complejas. El operador
 ++ es un ejemplo de esto.
 */

/* =====================================
 =            Operador ++                =
 ===================================== */

/* Tenemos distintas opciones para lograr lo mismo. Salvo la primera, 
 las otras dos son ejemplos de sugar syntax, donde se aplican 
 operadores que se crean para simplificar la tarea con mucho menos código */

let num = 10;

// aumentar en 1 el valor
num = num + 1;

// primera simplificacion
num += 1;

// o bien
num++;

/* =====================================
=          Operador ternario           =
===================================== */
//código base

let temperatura = 31;

if (temperatura > 30) {
  alert("Día caluroso!");
} else {
  alert("Día agradable");
}

//código con operador ternario

// **condicion  ?  caso1  :  caso2**

temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable");

/* El operador ternario ofrece un return implícito para cada caso.

Esto es muy útil cuando queremos retornar valores de forma 
condicional, lo cual con una estructura tradicional sería 
más extenso. Por ejemplo.
 */

//Código base
const usuario = {
  nombre: "John Doe",
  edad: 22,
};

let permiso;

if (usuario.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}

if (permiso) {
  alert("Puede comprar cerveza");
} else {
  alert("No puede comprar");
}

//Operador Ternario

const usuario1 = {
  nombre: "John Doe",
  edad: 22,
};

usuario1.edad >= 18 ? (permiso = true) : (permiso = false);

permiso ? console.log("Puedes ingresar") : console.log("No puedes ingresar");

// declaramos y asignamos condicionalmente
const permiso1 = usuario1.edad >= 18 ? true : false;

// mostramos el mensaje
permiso ? alert("Puede comprar cerveza") : alert("No puede comprar");

/* =====================================
=     Operador Logico and              =
===================================== */
/* Es una reducción de un condicional, pero trata de ejecutar 
(o retornar) algo sólo si la condición es verdadera, reduce 
un if sencillo con un solo bloque de ejecución: */

const carrito = [];

if (carrito.length === 0) {
  console.log("El carrito está vacío!");
}

// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!");

// con operador ternario
carrito.length === 0
  ? console.log("carrito vacio")
  : console.log(`tienes ${carrito.length} productos`);

//En el caso de que la condición resulte falsa, el operador AND retornará false en cambio:

const usuario2 = {
  nombre: "John Doe",
  edad: 14,
};

const registroIngreso = usuario2.edad >= 18 && new Date();
console.log(registroIngreso); // FALSE**

/* =====================================
=        Operador Lógico or            =
===================================== */

/* **OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta 
de dos operandos y no de una condición explícita: operando1 || operando2.**

Si no es falsy( si es distinto de 0, null undefined, NaN, false o string vacio ), 
el operador OR ( ||  ) retorna operador 1, De lo contrario retorna operador 2.

**A continuación, se presenta la tabla de evaluación de valores falsy para 
esclarecer cómo son los returns del operador lógico OR ( || ):** */

console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola Mundo" || "Falsy"); // Hola Mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy"); // Falsy**

//Es versátil para condicionar asignaciones de variables o de parámetros sencillamente 👇

const usuario3 = {
  nombre: "John Doe",
  edad: 14,
};

const usuario4 = null;

console.log(usuario3 || "El usuario no existe");
// { nombre: 'John Doe', edad: 14 }

//MOSTRANDO EJEMPLO AL REVÉS
console.log("el usuario no existe" || usuario4);
//El usuario no existe

console.log(usuario4 || "El usuario no existe");
// El usuario no existe

/* También es útil para inicializar variables de 
forma condicionada evaluando algún valor previo 👉

Por ejemplo, para recuperar el último estado de un carrito de compras 
del usuario almacenado en localStorage al iniciar mi 
app podría hacer esto: */

let carrito1;

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

if (carritoLocalStorage) {
  carrito1 = carritoLocalStorage;
} else {
  carrito1 = [];
}

/* O simplificar el proceso con el operador lógico OR ( || ). */

const carrito2 = JSON.parse(localStorage.getItem("carrito")) || [];

/* =====================================
=     Operador nullish Coalescing      =
===================================== */

/* Este Operador (??) funciona igual que el Operador OR ( || ), 
con la diferencia que admite más valores como ‘verdaderos’. 
En este caso, sólo obtenemos nullish en dos casos: */

console.log(0 ?? "Nullish"); // 0
console.log(40 ?? "Nullish"); // 40
console.log(null ?? "Nullish"); // Nullish
console.log(undefined ?? "Nullish"); // Nullish
console.log("Hola Mundo" ?? "Nullish"); // Hola Mundo
console.log("" ?? "Nullish"); // ""
console.log(NaN ?? "Nullish"); // NaN
console.log(true ?? "Nullish"); // true
console.log(false ?? "Nullish"); // false**

/* =====================================
=     Acceso condicional a un objeto   =
===================================== */
/* Si intentamos acceder a un objeto que no existe naturalmente 
obtendremos un error. Pero, si usamos el operador ? sobre la 
referencia de un objeto para condicionar su acceso podemos 
tener un mejor control de errores en la ejecución: */

const usuario5 = null;

console.log(usuario5.nombre || "El usuario no existe");
// Error: "No se pueden leer propiedades de NULL"

console.log(usuario5?.nombre || "El usuario no existe");
// "El usuario no existe"

/* También puede aplicarse sobre propiedades que sean objetos para 
evaluar su existencia/validez y controlar los flujos del programa: */

const usuario6 = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado",
  },
};

console.log(usuario6?.cursos?.javascript || "La propiedad no existe");

// "aprobado"
console.log(usuario6?.trabajos?.coderhouse || "La propiedad no existe");

// "La propiedad no existe"

/* =====================================
=      Desestructuracion de objetos    =
===================================== */
/* Muchas veces queremos acceder a propiedades de objetos y 
almacenarlas en variables diferentes para un posterior uso. 
Típicamente haríamos algo como lo siguiente para esto: */

const usuario7 = {
  nombre: "John Doe",
  edad: 32,
};

let nombre = usuario7.nombre;
let edad = usuario7.edad;

/* Declaramos variables y en ellas almacenamos los valores 
de las propiedades. Hacemos esto para trabajar con inmutabilidad, 
es decir utilizar esos valores sin riesgo de alterar las 
propiedades del objeto.


Sin embargo, podemos utilizar la desestructuración para 
simplificar y agilizar este proceso. ¿En qué consiste? 
Es una técnica que nos permite declarar variables donde 
guardar propiedades de un objeto de forma rápida y directa. */

//SINTAXIS
//let { prop1, prop2 } = objeto

const usuario8 = {
  nombre1: "John Doe",
  edad2: 32,
};

const { nombre1, edad2 } = usuario8;

console.log(nombre1); // "John Doe"

console.log(edad2); // 32**

/* 
Si intentamos desestructurar una propiedad inexistente en el 
objeto, obtendremos undefined.

Cada propiedad que queramos desestructurar del objeto las 
declaramos separadas por comas.


Si queremos acceder a propiedades más internas dentro de un objeto, 
es decir desestructurar alguna propiedad que sea a la vez un objeto, 
es posible hacerlo siguiendo el mismo patrón. */

const usuario9 = {
  nombre: "John Doe",
  edad: 32,
  telefono: {
    cel: 113334444,
    casa: null,
    trabajo: 113325555,
  },
};

const {
  nombre2,
  edad3,
  telefono: { cel },
} = usuario9;

/* En este caso, como teléfono es un objeto, desestructuramos la 
propiedad trabajo de éste, dentro de la desestructuración de usuario. 
Nótese que finalmente se terminan declarando dos variables, 
nombre y trabajo. */

/* =====================================
=     Desestructuracion en parametros  =
===================================== */
/* Si en una función recibimos objetos por parámetros, también es posible 
desestructurarlos directamente en el llamado, definiendo esto 
al declarar la función. 

Por ejemplo, supongamos una función que recibe un objeto 
producto por parámetro 
y debe trabajar con sus propiedades id y nombre. */

const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500,
};

const desestructurar = (item) => {
  // desestructurando dentro del bloque
  const { id, nombre } = item;
  console.log(id, nombre);
};

desestructurar(producto);

/* Sabiendo qué es lo que vamos a recibir y qué necesitamos 
desestructurar, podemos traducir esto con la siguiente lógica:
 */

// desestructurando lo que reciba por parámetro

const desestructurar1 = ({ id, nombre }) => {
  console.log(id, nombre);
};

desestructurar1(producto); // 10 Curso Javascript

/* ==============================================
=  Ejemplo de desestructuración del evento click =
=============================================== */

window.addEventListener("click", ({ x, y }) => {
  console.log(x, y);
});

/* =====================================
=       desestructuracion de arrays    =
===================================== */
/* Es posible desestructurar arrays de forma similar, usando corchetes [] 
en vez de llaves. La diferencia con la desestructuración de objetos
 es que la de arrays es posicional.


Es decir, declaramos las variables en orden y estas almacenan 
los valores de las mismas posiciones del array de referencia: */

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [a, b] = nombres;

console.log(a); // "Juan"
console.log(b); // "Julieta"**

/* Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array. */

const nombres1 = ["Juan", "Julieta", "Carlos", "Mariela"];

// omito las dos primeras posiciones
const [, , a1, b1] = nombres1;

console.log(a); // "Carlos"
console.log(b); // "Mariela"**

/* Si queremos acceder a otras posiciones, o mejor dicho omitir las 
primeras, podemos hacerlo dejando espacios vacíos con comas: */
