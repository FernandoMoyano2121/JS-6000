/* =====================================
=         Operador Spread              =
===================================== */

const nombres = ["Juan", "Fernando", "Matias", "Pedro"];

console.log(nombres); //esto devuelve un array , no los valores

const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros); //sucede lo mismo

/* Hasta Acá no tiene mayor importancia, el problema
   comienza cuando queremos usar metodos que reciben
   valores concretos como parametros

*/

console.log(Math.max(numeros)); //NaN

//Esto lo podemos resolver con el operador Spread
console.log(Math.max(...numeros));

/* =====================================
=    Spread de arrays sobre objetos    =
===================================== */

/* =====================================

=  Spread de arrays sobre Objetos      =

===================================== */

const nombres1 = ["Juan", "Sofia"];
const nombres2 = ["Pedro", "Fernando"];

//Spread de los dos arrays dentro de otro
const contenedorNombres = [...nombres1, ...nombres2];

console.log(contenedorNombres);

//Spread del array en un objeto
const miObjetillo = {
  ...contenedorNombres,
};

/* En este caso toma como nombre de la propiedad la posicion
y como valor el valor propiamente dicho */

console.log(miObjetillo);

/* =====================================
=         Spread de objetos            =
===================================== */

/* =====================================

=         Spread de Objetos            =

===================================== */

const usuario1 = {
  nombre: "Juan",
  edad: 21,
  curso: "Javascript",
};

/* Lista de todas las propiedades y valores de usuario1 dentro
  de otro objeto */

const usuario2 = {
  ...usuario1,
};

console.log(usuario1, usuario2);

/* En este ejemplo se modifica una  de las
  propiedades ya que no se pueden tener 2 con el mismo nombre
  en este caso prevalece la ultima declarada, se sobreescribe.
  
    
  
  y ademas se agrega una nueva "email" */

const usuario3 = {
  ...usuario1,
  curso: "ReactJs",
  email: "Juan@doe.com",
};

console.log(usuario3);

/* =====================================
=        Rest Parameter                =
===================================== */

/* Los parametros rest pueden ser usador para
indicar que quiero recibir una cantidad indeterminada
de parametros
  
imaginemos una suma

*/

function sumar(...numeros) {
  console.log(numeros);
}

sumar(4, 2, 4); //[4,2,4]

/* Tal como  vemos el resultado lo arroja
  con los numeros dentro de una array */

/* =====================================
  =        Ejemplo ecommerce             =
  ===================================== */

// Productos disponibles en la tienda

const producto1 = { id: 1, nombre: "Camiseta", precio: 20 };
const producto2 = { id: 2, nombre: "Pantalón", precio: 40 };

// Carrito de compras inicial con un producto existente

let carrito = [{ id: 1, nombre: "Camiseta", precio: 20, cantidad: 1 }];

// Función para añadir un producto al carrito o actualizar su cantidad

function agregarAlCarrito(producto) {
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    // Si el producto ya existe, aumentamos la cantidad

    carrito = carrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
  } else {
    // Si el producto no existe, lo agregamos con cantidad inicial de 1
    carrito = [...carrito, { ...producto, cantidad: 1 }];
  }

  console.log("Carrito actualizado:", carrito);
}

// Función para mostrar el detalle del carrito

function mostrarDetalleCarrito(...productos) {
  console.log("Detalle del carrito:");
  productos.forEach(({ id, nombre, precio }) => {
    console.log(`- ${id}: ${nombre} x ${precio}`);
  });
}

// Ejecución del ejemplo
console.log("Estado inicial del carrito:", carrito);

// Intentar agregar Camiseta nuevamente (incrementará cantidad)
agregarAlCarrito(producto1);
agregarAlCarrito(producto2);
mostrarDetalleCarrito(...carrito);
