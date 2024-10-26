/* **`LOCALSTORAGE`**:

- **Duración**: Los datos guardados en `localStorage` permanecen 
almacenados incluso después de cerrar el navegador o 
reiniciar la computadora. Los datos permanecen hasta que 
se eliminen explícitamente, ya sea manualmente o mediante código.

- **Contexto**: Los datos están disponibles en todas 
las pestañas y ventanas que carguen el mismo sitio web. 
Si abres una nueva pestaña en el mismo sitio, los datos 
estarán accesibles.

- **Uso típico**: Se usa cuando necesitas almacenar información 
que debe persistir a largo plazo, como las preferencias 
del usuario, carrito de compras, temas (claro/oscuro), etc. */

/* =====================================
=       Estableciendo valores          =
===================================== */

localStorage.setItem("clave1", "Hola Alumnos");
localStorage.setItem("valorBooleano", true);
localStorage.setItem("valorNumerico", 9);

/* =====================================
=         Obteniendo valores            =
===================================== */

//Obteniendo valores del localStorage en formato string

const clave1 = localStorage.getItem("clave1");
console.log(clave1);
console.log(typeof clave1);

const valorBooleano = localStorage.getItem("valorBooleano");
console.log(valorBooleano);
console.log(typeof valorBooleano);

/* =====================================
=               SESSIONSTORAGE          =
===================================== */

/* **Duración**: Los datos guardados en `sessionStorage` se mantienen 
solo mientras la pestaña o ventana del navegador esté abierta**. 
Una vez que cierras la pestaña o el navegador, los datos se 
eliminan automáticamente.

- **Contexto**: Los datos están disponibles solo en la pestaña 
o ventana específica en la que se guardaron. Si abres una nueva 
pestaña o ventana, los datos no estarán disponibles.


- **Uso típico**: Se usa cuando necesitas almacenar información temporal, 
como el estado de una sesión o información que debe perderse 
cuando el usuario cierra la pestaña, por ejemplo, en formularios 
temporales o sesiones de autenticación no persistentes. */

sessionStorage.setItem("clave2", "Hola mundo");

//Comprobando el valor y el tipo de dato del valor

const clave2 = sessionStorage.getItem("clave2");
console.log(clave2);
console.log(typeof clave2);

sessionStorage.setItem("clave3", [1, 2, 3]);

//Comprobando el valor y el tipo de dato del valor

const clave3 = sessionStorage.getItem("calve3");
console.log(clave3);
console.log(typeof clave3);

//Si solo pasamos un argumento falla y nos pide los dos
sessionStorage.setItem("clave4");

/* =====================================
=    Recorriendo el local storage      =
===================================== */

for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);

  console.log(`
   Clave: ${clave}
   Valor: ${localStorage.getItem(clave)}

  `);
}

/* =====================================
=   Eliminando datos del localstorage  =
===================================== */

localStorage.setItem("clave5", "Fernando");
localStorage.removeItem("clave5");

//localStorage.clear();

/* =====================================
=      Almacenando Objetos             =
===================================== */

//El almacenamiento en caso de mandar un objeto es [Object, Object]

/* Aca se intenta guardar el objeto de objeto como un string
lo cual da como resultado [object, Object] */

localStorage.setItem("clave4", { producto: "Arroz", precio: 2345 });
console.log(localStorage.getItem("clave4"));

/* =====================================
=               JSON                =
===================================== */
//JSON.stringify
//subiendo objetos al local storage en formato JSON

const producto = {
  id: 1,
  nombre: "Arroz",
  precio: 2344,
};

const objetoAJson = JSON.stringify(producto);
console.log(objetoAJson);

localStorage.setItem("producto1", objetoAJson);

//JSON.parse
//Convirtiendo objetos de JSON a objetos Javascript.
const producto1 = JSON.parse(objetoAJson);
console.log(producto1);

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto1);
