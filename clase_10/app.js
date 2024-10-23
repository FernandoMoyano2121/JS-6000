/* =====================================
=        addEventListener()            =
===================================== */

const botonComprar = document.getElementById("botonComprar");

const mensaje = () => {
  alert("Haz hecho click en el botón");
};

botonComprar.addEventListener("click", mensaje);

/* =====================================
=               onclick                =
===================================== */

const boton = document.getElementById("boton");

boton.onclick = () => {
  alert("Respuesta 2");
};

/* =====================================
=      mousedown | mouseup             =
===================================== */

const boton1 = document.getElementById("btnMouseDownUp");

// Detecta cuando se presiona el botón del mouse
boton1.addEventListener("mousedown", () => {
  console.log("Botón del mouse presionado (mousedown)");
});

// Detecta cuando se suelta el botón del mouse
boton1.addEventListener("mouseup", () => {
  console.log("Botón del mouse soltado (mouseup)");
});

/* =====================================
=     mouseover | mouseout            =
===================================== */

const area = document.getElementById("areaMouseOverOut");

// Detecta cuando el mouse entra al área
area.addEventListener("mouseover", () => {
  console.log("El mouse está sobre el área (mouseover)");
});

// Detecta cuando el mouse sale del área
area.addEventListener("mouseout", () => {
  console.log("El mouse salió del área (mouseout)");
});

/* =====================================
=               mousemove                =
===================================== */

const area1 = document.getElementById("areaMouseMove");

// Detecta cuando el mouse se mueve dentro del área

area1.addEventListener("mousemove", (event) => {
  console.log(`El mouse se mueve en: X=${event.clientX}, Y=${event.clientY}`);
});

/* =====================================
=             keydown | keyup         =
===================================== */

const input = document.getElementById("inputTeclado");

// Detecta cuando una tecla se presiona
input.addEventListener("keydown", (event) => {
  console.log(`Tecla presionada: ${event.key}`);
});

// Detecta cuando una tecla se suelta
input.addEventListener("keyup", (event) => {
  console.log(`Tecla soltada: ${event.key}`);
});

/* =====================================
=               change                =
===================================== */

const select = document.getElementById("selectorColor");

// Detecta cuando cambia el valor del select
select.addEventListener("change", (event) => {
  console.log(`Color seleccionado: ${event.target.value}`);
});

/* =====================================
=               submit                =
===================================== */

// Obtener el formulario
const formulario = document.getElementById("miFormulario");
const mensaje1 = document.getElementById("mensaje");

// Escuchar el evento 'submit'
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  // Mostrar un mensaje
  mensaje1.textContent = `Formulario enviado! Nombre: ${nombre}, Email: ${email}`;

  // Puedes hacer otras acciones aquí, como enviar los datos a un servidor
});
