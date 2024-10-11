//Array vacio
const arrayA = [];

//Array de numeros
const arrayB = [1, 2];

//Arrays de strings
const arrayC = ["a", "b", "c"];

//arrays de valores booleanos
const arrayD = [true, false, false, true];

//Array mixto
const arrayE = [1, false, "Hola"];

/* =====================================
=         Accediendo a valores          =
===================================== */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1;
console.log(numeros[3]); // 4;
let resultado = numeros[1] + numeros[2];
console.log(resultado); // 5;**

/* =====================================
=        Recorriendo el array          =
===================================== */

const numeros1 = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
  alert(numeros1[index]);
}

/* =====================================
=         Propiedades  length          =
===================================== */
/* Al igual que en un String, la propiedad length nos sirve para 
obtener el largo de un Array, es decir, para identificar 
cuántos elementos tiene. */

const miArray = ["marca", 3, "palabra"];

console.log(miArray.length); //imprime 3

/* =====================================
=         For con length                =
===================================== */

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numeros2.length; i++) {
  alert(numeros2[i]);
}

/* =====================================
=            Metodos- push              =
===================================== */

//El método push () agrega elementos al final del array.

const miArray1 = ["marca", 3, "palabra"];
miArray1.push("otro elemento");

console.log(miArray1.length); // ⇒ 4
console.log(miArray1);

//["marca", 3, "palabra", “otro elemento”]

/* =====================================
=               unshift                =
===================================== */
/* Si queremos agregar al inicio del array, 
utilizamos el método unshift() de forma similar: */

const miArray2 = ["marca", 3, "palabra"];

miArray2.unshift("otro elemento");
console.log(miArray2);

//[“otro elemento”, "marca", 3, "palabra"]

/* =====================================
=               pop                =
===================================== */
/* De forma inversa, existen métodos para eliminar elementos 
del array. Si queremos eliminar el último elemento, 
el método pop(). */

const nombres = ["Luis", "Ana", "Julia", "Juan"];

nombres.pop();
console.log(nombres); // ["Luis", "Ana", "Julia"]

/* =====================================
=               shift                =
===================================== */
/* Si queremos eliminar el primer elemento del 
array utilizamos el método shift(); */

nombres.shift();
console.log(nombres); // ["Ana", "Julia"]

/* =====================================
=               splice                =
===================================== */
/* El método splice() permite eliminar uno o varios elementos de 
un array en cualquier posición. Funciona con 2 parámetros: el 
primero es el índice donde se ubica el método para trabajar, 
y el segundo es la cantidad de elementos a eliminar desde esa posición. */

const misNombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

misNombres.splice(1, 2);
console.log(misNombres);

// ['Rita', 'Ana', 'Vanesa']

/* =====================================
=               join                =
===================================== */
/* Mediante el método join podemos generar un string con 
todos los elementos del array, separados por el valor que 
pasamos por parámetro: */

const misNombres1 = ["Luis", "Ana", "Julia", "Juan"];

console.log(misNombres1.join(", "));
// Luis, Ana, Julia

console.log(misNombres1.join("**"));
// Luis*Ana*Julia**

/* =====================================
=               concat                =
===================================== */
/* Mediante el método concat podemos combinar 
dos Arrays en un único Array resultante: */

const perros = ["Pupy", "Ronnie"];
const gatos = ["Mishi", "Garfield", "Zuri"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

/* =====================================
=               slice                =
===================================== */
/* El método slice devuelve una copia de una parte del Array
 dentro de un nuevo Array, empezando por el inicio hasta 
 fin (fin no incluído). El Array original no se modificará. */

const nombres1 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
const masculinos = nombres1.slice(1, 3); // Nuevo array desde la posición 1 a 3.

// masculinos contiene ['Pedro','Miguel']

/* =====================================
=               indexOf                =
===================================== */
/* El método indexOf() nos permite obtener el índice de un elemento en 
un array. Recibe por parámetro el elemento que queremos buscar en el 
array y, en caso de existir, nos retorna su índice. Si el elemento 
no existe nos retornará como valor: -1 */

const nombres2 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

console.log(nombres2.indexOf("Rita")); // ⇒ 0
console.log(nombres2.indexOf("Ana")); // ⇒ 3
console.log(nombres2.indexOf("Julieta")); // ⇒ -1**

/* =====================================
=               includes                =
===================================== */
/* Similar al anterior, el método includes me permite saber si 
un elemento que recibo por parámetro existe o no dentro de un array, 
retornando un valor booleano en caso afirmativo o negativo: */

const nombres3 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

console.log(nombres3.includes("Rita")); // ⇒ true
console.log(nombres3.includes("Miguel")); // ⇒ true
console.log(nombres3.includes("Julieta")); // ⇒ false**

/* =====================================
=               reverse                =
===================================== */
/* Como su nombre lo indica, el método reverse() invierte 
el orden de los elementos dentro de un array. */

const nombres4 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
nombres4.reverse();
console.log(nombres4);

// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

/* =====================================
=       Ejemplo de carga de nombres    =
===================================== */

//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;

//Empleo de do...while para cargar nombres en el array por prompt()

do {
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);

//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);

//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

/* =====================================
=          Ejemplo inventario           =
===================================== */

const inventario = [];

const agregarProducto = (nombre, precio, stock) => {
  inventario.push({
    nombre: nombre,
    precio: precio,
    stock: stock,
  });
};

const mostrarListadoDeProductos = () => {
  let listado = "Listado De productos:\n ";
  for (let i = 0; i < inventario.length; i++) {
    listado += `
   - Nombre : ${inventario[i].nombre}
   - Precio : ${inventario[i].precio}
   - Stock: ${inventario[i].stock} \n`;
  }

  return console.log(listado);
};

// Función para eliminar un producto por su nombre

const eliminarProducto = (nombre) => {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      inventario.splice(i, 1); // Elimina el producto encontrado
      mostrarListadoDeProductos();
      return; // Termina la función
    }
  }

  console.log("No se encontró el producto");
};

// Función para modificar el stock de un producto específico

function modificarStock(nombreProducto, nuevoStock) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombreProducto) {
      inventario[i].stock = nuevoStock;
      alert(
        `El stock de ${nombreProducto} ha sido 
      actualizado a${nuevoStock}.`
      );

      // Salimos del bucle una vez que encontramos el producto
      return;
    }
  }
  alert(`Producto no encontrado: ${nombreProducto}`);
}

agregarProducto("Arroz", 3000, 15);
mostrarListadoDeProductos();
agregarProducto("Pan", 2300, 4);
mostrarListadoDeProductos();

console.log(inventario);

/* ===========================================
=   Ejemplo Inventario construido con clases   =
============================================= */

class Tienda {
  constructor() {
    // Inicializamos el inventario como un array vacío
    this.inventario = [];
  }

  // Método para agregar productos al inventario
  agregarProducto(nombre, precio, stock) {
    this.inventario.push({
      nombre: nombre,
      precio: precio,
      stock: stock,
    });
  }

  // Método para mostrar el inventario actual
  mostrarInventario() {
    let listaInventario = "Inventario de la tienda:\n";
    for (let i = 0; i < this.inventario.length; i++) {
      listaInventario += `${i + 1}. ${this.inventario[i].nombre} - Precio: $${
        this.inventario[i].precio
      } - Stock: ${this.inventario[i].stock}\n`;
    }
    alert(listaInventario);
  }

  // Método para modificar el stock de un producto
  modificarStock(nombreProducto, nuevoStock) {
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].nombre === nombreProducto) {
        this.inventario[i].stock = nuevoStock;
        alert(
          `El stock de ${nombreProducto} ha sido actualizado a ${nuevoStock}.`
        );
        return; // Salimos del bucle una vez que encontramos el producto
      }
    }
    alert(`Producto no encontrado: ${nombreProducto}`);
  }
}

// Instanciamos la clase Tienda
const miTienda = new Tienda();

// Agregamos productos al inventario
miTienda.agregarProducto("Laptop", 1000, 5);
miTienda.agregarProducto("Celular", 500, 10);
miTienda.agregarProducto("Tablet", 300, 8);

// Mostramos el inventario inicial
miTienda.mostrarInventario();

// Modificamos el stock de un producto
let productoModificar = prompt("¿Qué producto quieres modificar el stock?");
let nuevoStock = parseInt(prompt("Introduce el nuevo stock:"));
miTienda.modificarStock(productoModificar, nuevoStock);

// Volvemos a mostrar el inventario actualizado
miTienda.mostrarInventario();
