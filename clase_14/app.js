// Identificar los botones del DOM por su ID
const basicAlertBtn = document.getElementById("basicAlertBtn");
const successAlertBtn = document.getElementById("successAlertBtn");
const errorAlertBtn = document.getElementById("errorAlertBtn");
const infoAlertBtn = document.getElementById("infoAlertBtn");
const warningAlertBtn = document.getElementById("warningAlertBtn");
const customAlertBtn = document.getElementById("customAlertBtn");

// Funciones para mostrar las alertas con SweetAlert2
function showBasicAlert() {
  Swal.fire("This is a basic alert!");
}

function showSuccessAlert() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your action was successful.",
  });
}

function showErrorAlert() {
  Swal.fire({
    icon: "error",
    title: "Error!",
    text: "Something went wrong.",
  });
}

function showInfoAlert() {
  Swal.fire({
    icon: "info",
    title: "Info",
    text: "Here is some useful information.",
  });
}

function showWarningAlert() {
  Swal.fire({
    icon: "warning",
    title: "Warning!",
    text: "Please be careful!",
  });
}

// Adjuntar eventos a los botones para ejecutar las funciones
basicAlertBtn.addEventListener("click", showBasicAlert);
successAlertBtn.addEventListener("click", showSuccessAlert);
errorAlertBtn.addEventListener("click", showErrorAlert);
infoAlertBtn.addEventListener("click", showInfoAlert);
warningAlertBtn.addEventListener("click", showWarningAlert);
customAlertBtn.addEventListener("click", showCustomAlert);

/* En SweetAlert2, puedes ejecutar acciones adicionales cuando el usuario 
hace clic en el botón de "Confirmar" o "Cancelar" utilizando promesas. 
La función `Swal.fire()` devuelve una promesa que se resuelve cuando 
el usuario interactúa con la alerta. Esta promesa permite capturar 
si el usuario confirmó o canceló la acción y actuar en consecuencia. */

function showCustomAlert() {
  Swal.fire({
    title: "Quieres agregar el producto?",
    html: 'You can <b>customize</b> this alert with <a href="#">HTML</a>!',
    showCancelButton: true,
    confirmButtonText: "ok",
    cancelButtonText: "Cancel",
    background: "#fefefe",
  }).then((result) => {
    // Si el usuario confirma la acción
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Agregado al carrito!",
        text: "Tu poroducto ya se encuentra en el carrito",
      });
    } // Si el usuario cancela la acción
    else if (result.isDismissed) {
      Swal.fire({
        icon: "error",
        title: "Cancelled",
        text: "You clicked Cancel!",
      });
    }
  });
}

//Swal.mixin() Reutilizar una configuracion

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// Para mostrar la alerta "Toast"
Toast.fire({
  icon: "success",
  title: "Signed in successfully",
});

/* =====================================
=               Tastify                =
===================================== */

//Notificacion básica
Toastify({
  text: "Esta es una notificación básica",
  duration: 3000,
}).showToast();

/* =====================================
=        Ejemplo boton con Tastify     =
===================================== */

// Selecciona el botón por su ID
const showToastBtn = document.getElementById("showToastBtn");

// Agrega un evento de clic al botón
showToastBtn.addEventListener("click", () => {
  // Llama a Toastify para mostrar la notificación
  Toastify({
    text: "¡Acción realizada con éxito!",
    duration: 3000,
    gravity: "top", // "top" o "bottom"
    position: "right", // "left", "center", "right"
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    avatar: "https://example.com/icon.png", // URL del ícono
  }).showToast();
});

/* =====================================
=               Luxon                =
===================================== */

/* La clase principal en luxon es DateTime. Para ser más eficientes/ordenados, 
podemos referenciarla en una variable global para facilitar su acceso: */

const DateTime = luxon.DateTime;
/* Un DateTime representa un milisegundo específico en el tiempo, 
junto con una zona horaria. 

Podemos crear nuestro primer DateTime con el método .local(), 
que recibe argumentos desde el año hasta los milisegundos. 

En principio es similar al objeto Date de JS, pero trae 
diversos métodos útiles: */

const dt = DateTime.local(2022, 1, 25, 12, 10);
// 25 / 01 / 2022 - 12:10hs

/* =====================================
=            fromObject                =
===================================== */
/* Podemos crear un objeto de fecha con la fecha actual a 
través de DateTime.now(), que es equivalente a llamar a DateTime.local() 
sin argumentos.

También podemos crear fechas a través de un objeto, pasando 
las distintas características por propiedades y valores: */

const dt1 = DateTime.fromObject(
  { day: 22, hour: 12, month: 2 },
  { zone: "America/Buenos_Aires", numberingSystem: "beng" }
);

console.log(dt1.toString());

// 2022-02-22T12:00:00.000-03:00

/* =====================================
=       Accediendo a las fechas        =
===================================== */
/* Para poder recuperar los valores en un formato legible debemos 
aplicar algunos métodos específicos para esto. 

Algo que sí queremos es recuperar la fecha como string, y para 
eso aplicamos el método .toString() al objeto creado: */

const now = DateTime.now();
console.log(now.toString());

// 2022-01-25T12:31:00.775-03:00

/* Podemos acceder a los distintos componentes de la fecha 
creada a través de propiedades específicas: */

const dt2 = DateTime.now();
dt2.year; //=> 2022
dt2.month; //=> 1
dt2.day; //=> 25
dt2.second; //=> 22
dt2.weekday; //=> 2**

/* =====================================
=       Formatear la fecha              =
===================================== */

/* En general, vamos a querer mostrar nuestra fecha en un formato 
legible acorde a nuestra necesidad. 

Para esto, el más común es el método .toLocaleString() 
que ajusta la fecha a un formato sencillo y genérico. 

Sin embargo, Luxon posee una lista de presets con distintos 
formatos posibles, el cual podemos elegir y enviar por 
parámetro al método .toLocaleString(). 

Adicionalmente, puedes concatenar previamente el método .setLocale 
para cambiar el idioma de presentación. */

const dt3 = DateTime.now();

dt3.toLocaleString(); // 25/1/2022
dt3.toLocaleString(DateTime.DATE_FULL); // 25 de enero de 2022
dt3.toLocaleString(DateTime.TIME_SIMPLE); // 12:51
dt3.setLocale("en").toLocaleString(DateTime.DATE_FULL);
// January 25, 2022

/* =====================================
=               Transformacion          =
===================================== */

/* Los objetos de Luxon son inmutables.

Esto significa que los métodos de transformación no modifican la variable 
sobre la cual los aplicamos, sino que retornan nuevas 
instancias alteradas de ellos.

Con los métodos plus y minus podemos obtener cálculos sobre las 
fechas de forma sencilla. 

Pasamos un objeto con la cantidad de días, meses, horas, minutos, etc., 
que queramos sumar o restar a la fecha de referencia: */

const dt4 = DateTime.now();

console.log(dt4.toLocaleString(DateTime.DATETIME_SHORT));

// 25/1/2022 14:21

const suma = dt4.plus({ hours: 5, minutes: 15 });
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// 25/1/2022 19:36

const resta = dt4.minus({ month: 2, days: 10 });
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// 15/11/2021 14:21
