/*

for (inicializador(variable); condicion(comparación); actualizacion(contador)){}

*/

/* =====================================
=          Conteo Basico               =
===================================== */

for (let i = 0; i < 10; i++) {
  alert(i);
}

/* =====================================
=       Tabla de multiplicar           =
===================================== */

//Solicitamos un valor al usuario
let numeroIngresado = parseInt(prompt("Por favor ingresa un numero"));

/*generamos un bucle para multiplicar el valor ingresado por el incremento de i*/

for (let i = 1; i <= 10; i++) {
  let tabla = numeroIngresado * i;
  console.log(`El numero ${numeroIngresado} X ${i} es ${tabla}`);
}

/* =====================================
=  Tabla de multiplicar con validacion =
===================================== */

let numeroIngresado1 = parseInt(prompt("Por favor ingresa un numero"));

if (!isNaN(numeroIngresado1)) {
  for (let i = 1; i <= 10; i++) {
    let tabla = numeroIngresado1 * i;
    console.log(`El numero ${numeroIngresado1} X ${i} es ${tabla}`);
  }
} else {
  console.log("Ingresa un numero valido");
}

/* =====================================
=              For y break             =
===================================== */

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("no puedes continuar");
    break;
  }
  alert(i);
}
console.log("Acabo de salir del ciclo 😮‍💨");

/* =====================================
=         For y continue               =
===================================== */

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    alert("ya vas por la mitad");
    continue;
  }
  alert(i);
}

/* =====================================
=     Adivinando numero secreto        =
===================================== */

let numeroSecreto = 5;
let intentos = 1;

for (let i = 1; i <= 3; i++) {
  let tuNumero = parseInt(
    prompt("ingresa un numero para intentar adivinar el numero secreto")
  );
  if (tuNumero === numeroSecreto) {
    alert(`Adivinaste!!!!! el numero era ${numeroSecreto}`);
    break;
  } else if (intentos === 3) {
    console.log(
      `haz alcanzado el limite de intentos, el numero secreto era ${numeroSecreto} Recarga para continuar`
    );
  } else {
    alert(`intento numero ${intentos} numero elegido : ${tuNumero}`);
  }
  intentos++;
}

/* =====================================
=               Opcion 2                =
===================================== */

let numeroSecreto1 = 7; // Número secreto a adivinar

for (let intentos = 1; intentos <= 3; intentos++) {
  let numeroAdivinado = parseInt(
    prompt("Adivina el número secreto (entre 1 y 10):")
  );

  if (numeroAdivinado === numeroSecreto1) {
    console.log(
      `¡Felicidades! Adivinaste el número secreto en el intento ${intentos}`
    );
    break; // Se detiene el ciclo si el número es correcto
  } else {
    console.log("Número incorrecto, intenta de nuevo.");
  }

  // Si se llega al quinto intento sin adivinar
  if (intentos === 3) {
    console.log(
      "Lo siento, has agotado tus intentos. El número secreto era " +
        numeroSecreto
    );
  }
}

/* =====================================
=               While                =
===================================== */

/*
while (condición) {

  bloque de código a repetir
  manipulacion de la condición/variable

}*/

/* =====================================
=   Cuidado con los bucles infinitos   =
===================================== */

let repetir = true;

while (repetir) {
  //console.log("Al infinito y...¡Más allá!");
}

/* =====================================
=  Tabla de multiplicar con While      =
===================================== */

let numeroIngresado2 = parseInt(prompt("Por favor ingresa un número"));

if (!isNaN(numeroIngresado2)) {
  let i = 1; // Inicializamos la variable i

  while (i <= 10) {
    let tabla = numeroIngresado2 * i;
    console.log(`El número ${numeroIngresado2} X ${i} es ${tabla}`);
    i++; // Incrementamos i después de cada iteración
  }
} else {
  console.log("Ingresa un número válido");
}

/* =====================================
=               Do While                =
===================================== */

let repetir1 = false;

do {
  console.log("¡Solo una vez!");
} while (repetir1);

/* =====================================
=               Ejemplo operacion      =
===================================== */

let nombreArticulo;
let contador = 0;

do {
  nombreArticulo = prompt(
    "Ingresa el nombre de un artículo (o escribe 'salir' para terminar):"
  );

  if (nombreArticulo !== "salir") {
    contador++;
    console.log(`Artículo ${contador}: ${nombreArticulo}`);
  }
} while (nombreArticulo !== "salir");

console.log(`Has ingresado un total de ${contador} artículos.`);

/* =============================================
= 2da opción con nombres de variables distintos =
=============================================== */

let nombreArticulo1;
let cantidadArticulos = 0;

do {
  // Pedir al usuario que ingrese el nombre de un artículo o 'salir' para terminar
  nombreArticulo1 = prompt(
    "Ingresa el nombre de un artículo (o escribe 'salir' para terminar):"
  );

  // Si el usuario no escribió 'salir', contar el artículo e imprimirlo
  if (nombreArticulo1 !== "salir") {
    cantidadArticulos++;
    console.log(`Artículo ${cantidadArticulos}: ${nombreArticulo1}`);
  }
} while (nombreArticulo1 !== "salir"); // Repetir mientras no escriba 'salir'

// Al final, mostrar cuántos artículos ingresó el usuario
console.log(`Has ingresado un total de ${cantidadArticulos} artículos.`);

/* =====================================
=               Switch                 =
===================================== */

switch (expresion) {
  case valor1:
    // Código si expresion es igual a valor1
    break;
  case valor2:
    // Código si expresion es igual a valor2
    break;
  default:
  // Código si no coincide con ningún caso
}

/* =====================================
=           Ejemplo lúdico             =
===================================== */

let mascotaFavorita = prompt(
  "¿Cuál es tu mascota favorita: gato, perro o pájaro?"
).toLowerCase();

switch (mascotaFavorita) {
  case "gato":
    console.log("¡Los gatos son independientes y adorables!");
    break;
  case "perro":
    console.log("¡Los perros son leales y siempre están felices de verte!");
    break;
  case "pájaro":
    console.log("¡Los pájaros son libres y llenan el aire con sus cantos!");
    break;
  default:
    console.log("¡Parece que tienes una mascota exótica!");
}
