/* El **DOM (Document Object Model)** es una representación estructurada 
de una página web que permite a los lenguajes de programación como JavaScript 
interactuar con el contenido de esa página. Básicamente, convierte el HTML 
de la página en un árbol de nodos, donde cada parte del contenido 
(etiquetas, textos, atributos, etc.) se convierte en un objeto que 
puede ser modificado, eliminado o creado mediante código.

En resumen, el DOM es lo que te permite, por ejemplo, cambiar 
el texto de un párrafo o el color de un botón desde JavaScript. */

/* =====================================
=      Accediendo a nodos desde JS     =
===================================== */

console.dir(document);
console.dir(document.head);
console.dir(document.body);

/* =====================================
=         getElementById()                =
===================================== */

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

/* =====================================
=      getElementByClassName()         =
===================================== */

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

/* =====================================
=       getElementByTagName()          =
===================================== */

let contenedores = document.getElementsByTagName("div");

console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

const listaDePaises = document.getElementsByTagName("li");
console.log(listaDePaises);

const pais = listaDePaises[0].textContent;
console.log(pais);

for (let pais of listaDePaises) {
  console.log(pais.textContent);
}

/* =====================================
=               innerText()            =
===================================== */

let titulo = document.getElementById("titulo");
console.log(titulo.innerText); // “Hola Mundo!”

// cambio el contenido del elemento
titulo.innerText = "Hola Coder!";
console.log(titulo.innerText); // “Hola Coder!”**

/* =====================================
=               innerHTML()                =
===================================== */
let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = `
<div>
<h2>Mi Parrafo</h2>
 <p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.    Voluptatem, voluptate.
 </p>
</div>`;

/* =====================================
=               classname                =
===================================== */

let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = `

<div>
<h2>Mi Parrafo</h2>
 <p id = "mi_parrafo">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
  voluptate.
  </p>
</div>`;

let miParrafo = document.getElementById("mi_parrafo");
miParrafo.className = "parrafo";

/* =====================================
=           createElement()            =
===================================== */

// Crear nodo de tipo Elemento, etiqueta p
let parrafo1 = document.createElement("p");

// Insertar HTML interno
parrafo1.innerHTML = "<h2>¡Hola Coder!</h2>";

// Añadir el nodo Element como hijo de body
document.body.append(parrafo1);

/* =====================================
=   Eliminando elementos del DOM      =
===================================== */

const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");

parrafo1.remove();

/* =====================================
=     Agregando datos en inputs        =
===================================== */

//CODIGO JS
document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = 39;

/* =====================================
=  Elementos dinamicos a partir de array =
===================================== */

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");

//Array con la información a agregar
let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];

//Iteramos el array con for...of
for (const persona of personas) {
  //Creamos un nodo <li> y agregamos al padre en cada ciclo
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.appendChild(li);
}

/* ===========================================
=     Mismo ejemplo con templates literales  =
============================================ */

const personas1 = ["pepe", "juan", "Ariel", "Fernando"];

let contenedorDePersonas = document.getElementById("contenedor_personas");

for (let persona of personas1) {
  const itemPersona = document.createElement("div");
  itemPersona.innerHTML = `<p>Hola Soy <strong>${persona}</strong></p>`;
  contenedorDePersonas.append(itemPersona);
}

/* ========================================
=  Ejemplo final renderizado de productos =
========================================= */

const productos = [
  {
    id: 1,
    nombre: "caramelo",
    precio: 15000,
  },

  {
    id: 2,
    nombre: "Arroz",
    precio: 15000,
  },

  {
    id: 3,
    nombre: "Carbon",
    precio: 35000,
  },
];

let contenedorDeProductos = document.getElementById("contenedor_productos");

for (let producto of productos) {
  const itemProducto = document.createElement("div");

  itemProducto.innerHTML = `
       <h3> ID: ${producto.id}</h3>
       <p> Producto: ${producto.nombre}</p>
      <b> $ ${producto.precio}</b>`;

  contenedorDeProductos.append(itemProducto);
}
