/* =====================================
=               Objeto Math             =
===================================== */

/* 
 Math es un objeto incorporado que tiene propiedades y métodos 
 para trabajar con operaciones matemáticas. Sus metodos 
 son estáticos, lo que significa que no necesitamos instanciar la clase. 
 */

/* =====================================
 =          constante PI                =
 ===================================== */

const radio = Math.PI;
console.log(radio);

/* =====================================
=        Pequeño ejemplo con PI         =
===================================== */

// Mostrar el valor de PI
console.log(Math.PI); // 3.141592653589793

// Calcular la circunferencia de un círculo dado su radio
const miRadio = 5;
const circunferencia = 2 * Math.PI * miRadio;

console.log(
  `La circunferencia de un círculo con radio ${miRadio} es: ${circunferencia}`
);

/* =====================================
=               Math.max                =
===================================== */
/* Recibe argumentos de tipo numéricos funciona 
con valores negativos */

console.log(Math.max(3, 7, 9, 23, 576, 8)); //576

/* =====================================
=               Math.min                =
===================================== */
/*Tambien funciona con valores negativos. */

console.log(Math.min(3, 7, 9, 23, 576, 8));

/* También se puedem referenciar valores de infinito 
positivo e infinito negativo  */

console.log(Math.max(55, Infinity, 0, -25, 93, 4)); // Infinity
console.log(Math.min(55, 13, 0, -Infinity, 93, 4)); //-infinity

/* =====================================
=               Math.pow                =
===================================== */

console.log(Math.pow(2, 3)); // 8

/* - **Descripción:** Retorna la base elevada a la potencia del exponente.
- **Parámetros:** `base` (Número a elevar) y `exponent` (Número que representa la potencia).
- **Retorno:** Número. */

/* =====================================
=      ceil() floor() round()          =
===================================== */

/* Sirven para redondear un valor numérico a un 
número entero cercano: */

const pi = Math.PI; // 3.141592653589793

// CEIL: devuelve el entero mas cercano redondeando hacia arriba.
console.log(Math.ceil(pi)); // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log(Math.floor(pi)); // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano para arriba a partir de .5
console.log(Math.round(pi)); // 3

/* =====================================
=       square root - sqrt()            =
===================================== */

Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095
Math.sqrt(1); // 1
Math.sqrt(-1); // NaN

/* =====================================
=               random()                =
===================================== */

/* - **Descripción:** Retorna un número pseudoaleatorio 
entre 0 (inclusive) y 1 (exclusivo).


- **Retorno:** Número (puede ser utilizado para generar 
números aleatorios en un rango específico). */

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

/* =====================================
=   numeros random dentro de un rango  =
===================================== */

// números entre 0 y 10
console.log(Math.random() * 10);

// números entre 0 y 50
console.log(Math.random() * 50);

// números entre 20 y 50
console.log(Math.random() * 30 + 20);

/* =========================================
=  numeros random entre rangos redondeados =
========================================= */

//0 - 100
let numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);

//1 - 100

//esto sucede porque ceil redondea hacia arriba
let numeroAleatorio1 = Math.ceil(Math.random() * 100);
console.log(numeroAleatorio1);

//0 - 99

//Esto sucede porque floor redondea hacia abajo
let numeroAleatorio2 = Math.floor(Math.random() * 100);
console.log(numeroAleatorio2);

/* =====================================
=               Clase Date             =
===================================== */

console.log(new Date());
let fechaActual = new Date();
//Mon Oct 14 2024 22:05:12 GMT-0300 (hora estándar de Argentina)

/* **GMT-0300** significa que el lugar o la zona horaria 
en la que te encuentras está **tres horas detrás del 
Meridiano de Greenwich** (GMT, por sus siglas en inglés). 
GMT (Greenwich Mean Time) es el punto de referencia para las 
zonas horarias en todo el mundo. El valor **"-03:00"** indica 
que tu zona horaria está desplazada tres horas hacia el oeste 
(es decir, se resta este tiempo). */

const fechaAcatual = new Date();
console.log(fechaAcatual);

const fechaFormateada = fechaAcatual.toISOString();
console.log(fechaFormateada);

/* `YYYY-MM-DD`: Año, mes y día.
- `THH:mm:ss.sss`: Hora, minutos, segundos y milisegundos.
- `Z`: Indica que la hora está en UTC (tiempo universal coordinado). */

/* =======================================
=     Definiendo una fecha personalizada  =
======================================== */

const fechaPersonalizada = new Date(2024, 9, 14, 18, 30, 25, 123);
// Recuerda que los meses van de 0 (enero) a 11 (diciembre)
//año/mes/dia/hora/minutos/segundos/milisegundos

const fechaISO = fechaPersonalizada.toISOString();
console.log(fechaISO); // Ejemplo: "2024-10-14T18:30:25.123Z"

/* =====================================
=               getMonth()                =
===================================== */

const mes = fechaPersonalizada.getMonth();
console.log(mes); //1

//0 = Enero
//1 = Febrero
//2 = Marzo
//3 = Abril
//4 = Mayo
//5 = Junio
//6 = Julio
//7 = Agosto
//8 = Septiembre
//9 = Octubre
//10 = Noviembre
//11 = Diciembre

/* =====================================
=               getDay()                =
===================================== */

/* formula casera para representar al lunes como 
1 y domingo como 7 */

let dia = fechaPersonalizada.getDay();
console.log(dia);

let dia1 = ((fechaPersonalizada.getDay() + 6) % 7) + 1;
console.log(dia1);

//0 + 6 = 6    -->  6 % 7 = 6   --> 6 + 1 = 7
//1 + 6 = 7    -->  7 % 7 = 0   --> 0 + 1 = 1
//2 + 6 = 8    -->  8 % 7 = 1   --> 1 + 1 = 2
//3 + 6 = 9    -->  9 % 7 = 1   --> 2 + 1 = 3
//4 + 6 = 10   --> 10 % 7 = 1   --> 3 + 1 = 4
//5 + 6 = 11   --> 11 % 7 = 1   --> 4 + 1 = 5
//6 + 6 = 12   --> 12 % 7 = 1   --> 5 + 1 = 6

/* =====================================
=               getHours()                =
===================================== */

/* Devuelve la hora (de 0 a 23). */
const hora = fechaPersonalizada.getHours();
console.log(hora);

/* =====================================
=       toLocalTimeString()            =
===================================== */

const miFechaActual = new Date();
const horaCompleta = miFechaActual.toLocaleTimeString();
console.log(horaCompleta); // Muestra algo como "14:30:25" (dependiendo de tu zona horaria)

/* =====================================
=      Ejemplo de calculos con fechas  =
===================================== */

//formato ISO 8601 -> YYYY-MM-DDTHH:mm:ss.sssZ

const navidad = new Date("2024-12-25T16:00:00");
console.log(navidad);

const milisegundosPorDia = 24 * 60 * 60 * 1000;
const hoy = new Date();

console.log(milisegundosPorDia); // Imprime: 86400000

let diasParaNavidad = Math.round((navidad - hoy) / milisegundosPorDia);

console.log(diasParaNavidad);

/* =====================================
=               Ejemplo final          =
===================================== */

// Función para agregar tareas
function agregarTarea(tareas) {
  const nombreTarea = prompt("¿Cuál es el nombre de la tarea?");
  const fechaVencimiento = new Date(
    prompt("¿Cuál es la fecha de vencimiento? (YYYY-MM-DD)")
  );

  tareas.push({ nombre: nombreTarea, vencimiento: fechaVencimiento });
  alert(`Tarea "${nombreTarea}" agregada.`);
}

// Función para mostrar tareas
function mostrarTareas(tareas) {
  const hoy = new Date();
  let mensaje = "Lista de tareas:\n";

  tareas.forEach((tarea) => {
    const diasRestantes = Math.ceil(
      (tarea.vencimiento - hoy) / (1000 * 60 * 60 * 24)
    );
    mensaje += `${tarea.nombre} - Vence en ${diasRestantes} días.\n`;
  });

  alert(mensaje || "No hay tareas.");
}

// Función principal
function gestionarTareas() {
  const tareas = [];
  let opcion;

  do {
    opcion = prompt(
      "¿Qué quieres hacer?\n1. Agregar tarea\n2. Mostrar tareas\n3. Salir"
    );
    if (opcion === "1") agregarTarea(tareas);
    else if (opcion === "2") mostrarTareas(tareas);
  } while (opcion !== "3");

  alert("Saliendo de la aplicación.");
}

// Iniciar la aplicación
gestionarTareas();
