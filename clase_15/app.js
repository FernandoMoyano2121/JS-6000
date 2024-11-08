/* =====================================
=               setTimeOut                =
===================================== */
/* **Es una función que permite realizar acciones asincrónicamente 🤹.
 La función recibe dos parámetros:**

**Una función de callback y un valor numérico que 
representa milisegundos** */

setTimeout(fn, time);

/* **Así, la función que pasamos por primer parámetro se 
ejecuta luego de que transcurra el tiempo definido 
en el segundo parámetro. Por ejemplo:** */

setTimeout(() => {
  console.log("Proceso asincrónico");
}, 3000);

/* =====================================
=    Ejemplo de salida con setTimeOut   =
===================================== */

/* **En modelo sincrónico, esperaríamos ver el próximo ejemplo 
en el siguiente orden:**

1. **“Inicia proceso”**
2. **“Mitad de proceso” (tras 2 segundos)**
3. **“Fin proceso”** */

console.log("Inicia proceso");

setTimeout(() => {
  console.log("Mitad de proceso");
}, 2000);

console.log("Fin proceso");

/* Sin embargo, la salida se produce de la siguiente forma:** */

// Inicia proceso
// Fin proceso
// Mitad de proceso  - tras 2 segundos

/* ===============================================
=   Ejemplo de setTimeOut para una notificacion  =
================================================ */

/* Aquí se agrega una clase a un elemento tras clickear un botón, 
y luego se dispara un setTimeout que remueve esa clase 
del elemento tras 2500 milisegundos.  */

const btn = document.getElementById("boton");
const popup = document.getElementById("popup-mensaje");

btn.addEventListener("click", () => {
  popup.classList.add("popup-active");

  setTimeout(() => {
    popup.classList.remove("popup-active");
  }, 3000);
});

/* =====================================
=      setTimeOut con un for of        =
===================================== */

for (let letra of "hola") {
  setTimeout(() => {
    console.log(letra);
  }, 1000);
}

for (let letra of "mundo") {
  setTimeout(() => {
    console.log(letra);
  }, 3000);
}

/* =====================================
=   setTimeOut con tiempo 0            =
===================================== */

/* **Si se explicase realmente por el tiempo de ejecución, podríamos 
suponer que un setTimeout con 0 milisegundos se ejecutaría de forma 
inmediata, sin irrumpir el orden sincrónico del programa. 
Pero vemos que el efecto sigue siendo igual que antes** */

console.log("Inicia proceso");

setTimeout(() => {
  console.log("Mitad de proceso");
}, 0);

console.log("Fin proceso");

/* =====================================
=               Call Stack                =
===================================== */
/* ¿Cómo es el proceso de Call Stack? 📞

  

Cuando se está a punto de ejecutar una función, 
ésta es añadida al stack. Si la función llama a la vez, 
a otra función, ésta es agregada sobre la anterior: */

function multiply(x, y) {
  return x * y;
}

function printSquare(x) {
  let s = multiply(x, x);
  console.log(s);
}

printSquare(5);

/* =====================================
=               Event Loop                =
===================================== */

/* **Muchas funciones asincrónicas se ejecutan en un stack diferente. 
El Event Loop es la herramienta que permite la sincronización 
entre nuestro call stack con estas tareas asincrónicas 
que funcionan en un thread aparte.**

**Si el stack está vacío, el Event Loop envía la primera 
función que esté en la callback queue al call stack y 
comienza a ejecutarse.**

Así, entendemos cómo funciona de tal manera una 
instrucción como la siguiente 👉

Por más que hagamos el timeout con 0 milisegundos, éste se 
envía al stack de web apis primero, luego al callback queue, 
y finalmente el event loop lo incorpora al callstack para 
su ejecución, luego de los console.log anteriores 🧩 */

console.log("Inicia proceso");

setTimeout(() => {
  console.log("Mitad de proceso");
}, 0);

console.log("Fin proceso");

// Inicia proceso
// Fin proceso
// Mitad de proceso

/* =====================================
=               SetInterval                =
===================================== */

/* Tiene la misma sintaxis que setTimeout, pero la 
unidad de tiempo es un intervalo para la 
repetición de la función asociada: */

setInterval(() => {
  console.log("Tic");
}, 1000);

/* **Permite ejecutar funciones de manera reiterativa 
tras los milisegundos indicados hasta que indiquemos su 
detención o se cierre la aplicación ⏱.** */

/* =====================================
=       clearInterval / clearTimeOut   =
===================================== */

/* **En caso de querer remover un Intervalo, utilizamos la función clearInterval (). 
También podemos detener la ejecución de un setTimeout invocando clearTimeout ().** */

let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000);

/* unciona igual con los timeout. Si guardamos en una variable 
la referencia al timeout generado, podemos usarla para removerlo luego. 
En el siguiente caso, el timeout generado nunca llega a ejecutarse:** */

console.log("Inicio");

const fin = setTimeout(() => {
  console.log("fin");
}, 2000);

clearTimeout(fin);

/* =====================================
=               Promesas                =
===================================== */

/* Es un objeto de Javascript que representa un evento a futuro. 
Es una acción asincrónica que se puede completar en algún momento 
y producir un valor, y notificar cuando esto suceda.

Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected. 
Las promesas pueden ser resueltas o rechazadas. */

new Promise((resolve, reject) => {
  //cuerpo de la promesa
});

/* =====================================
=               resolve y reject        =
===================================== */

const eventoFuturo = () => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
  });
};

console.log(eventoFuturo()); // Promise { <pending> }

/* El valor de retorno de la promesa se define a través del llamado 
a las funciones de resolve o reject:

- Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su 
estado a fulfilled, con el valor enviado a resolve().
    
- Si la promesa llama a reject(), cambiará su estado a rejected con 
el valor enviado al reject(). */

const eventoFuturo1 = (res) => {
  return new Promise((resolve, reject) => {
    if (res === true) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};

console.log(eventoFuturo1(true)); // Promise { 'Promesa resuelta' }
console.log(eventoFuturo1(false)); // Promise { <rejected> 'Promesa rechazada' }**

/* ========================================
=     resolve y reject con setTimeOut      =
======================================== */

const eventoFuturo2 = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 2000);
  });
};

console.log(eventoFuturo2(true)); // Promise { <pending> }
console.log(eventoFuturo2(false)); // Promise { <pending> }

/* **En este caso, el console.log es sincrónico y vemos que la promesa 
está en pending en ambos llamados (su resolución se generará dentro de 2s). 
Las promesas tienen un mecanismo para trabajar esta asincronía y poder 
ejecutar funciones cuando cambie su estado.** */

/* =====================================
=               Then y catch           =
===================================== */

/* Al llamado de una función que retorne una promesa, podemos concatenar 
el método .then() o .catch(), los cuales reciben una función por 
parámetro con la cual se captura el valor de la promesa:

- .then() : Si la promesa es resuelta ✅, su valor de retorno se captura 
dentro del .then(), recibiendo por parámetro de su función ese valor.
    
.catch() : si la promesa es rechazada ❌, su valor se captura dentro 
de un .catch() siguiendo la misma lógica.** */

eventoFuturo2(true).then((response) => {
  console.log(response); // Promesa resuelta
});

eventoFuturo2(false).catch((error) => {
  console.log(error); // Promesa rechazada
});

/* =====================================
=               Finally()                =
===================================== */

/*
 **finally() es un método que recibe una función la cual se ejecutará 
 siempre al finalizar la secuencia, sin importar si se 
 haya resuelto o no la promesa:** */

eventoFuturo(true)
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("Fin del proceso");
  });

// Promesa resuelta
// Fin del proceso

/* =====================================
=               EJEMPLO FINAL           =
===================================== */
/* ===========================================
= Simulacion de obtencion de datos de una DB =
=========================================== */

const DB = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 1, nombre: "Producto 2", precio: 1500 },
  { id: 1, nombre: "Producto 3", precio: 1500 },
  { id: 1, nombre: "Producto 4", precio: 1500 },
];

let productos = [];

const renderizadoDeProductos = (arr) => {
  const container = document.getElementById("contenedor-productos");
  arr.forEach((producto) => {
    const item = document.createElement("div");
    item.innerHTML = `<strong>${producto.nombre}</strong>`;
    container.appendChild(item);
  });
};

const pedirProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DB);
      /*  console.log(DB); */
    }, 3000);
  });
};

pedirProductos().then((res) => {
  productos = res;
  renderizadoDeProductos(productos);
});
