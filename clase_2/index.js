/* =====================================
=           LEER:OPERADORES            =
===================================== */

// ==  Igualdad(valor)
// === Igualdad estricta(compara valor y tipo de dato)
//  <  Menor que
//  > Mayor que
// <= Menor o igual que
// >= Mayor o igual que
// != diferente que (valor)
// !== desigualdad estricta (valor y tipo de dato)
// && Operador and (y)
// || Operador or (o)
// ! Operador not (no)
/* =====================================
=          LEER: Estructura Inicial    =
===================================== */

if (condicion) {
  // Bloque de código que se ejecuta si la condición es
  //verdadera es decir TRUE
} else {
  // Bloque de código que se ejecuta si la condición es
  //falsa es decir FALSE
}

/* =====================================
=       Pasando valor boolean          =
===================================== */

// si - condicion

if (true) {
  // bloque de código a ejecutar
  console.log("vas a ver este mensaje");
}

/* =====================================
=     LEER: Ejemplo condicional simple  =
===================================== */

let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes ingresar al sitio.");
} else {
  console.log("Eres menor de edad. No puedes ingresar al sitio.");
}

/* =====================================
=    LEER: Ejemplo Igualdad estricta   =
===================================== */

let numero = 5;

if (numero === 5) {
  console.log("El número es igual a 5");
} else {
  console.log("El número NO es igual a 5");
}

//NOTE:Aqui se evalua tanto el valor como el tipo de dato

/* =====================================             
             LEER:Ejemplo 1            =
===================================== */

const tuEdad1 = prompt("Por favór ingresa tu edad");
console.log(typeof tuEdad1);

if (tuEdad1 === number) {
  console.log("Tu edad es " + tuEdad1);
} else {
  console.log("debes ingresar un dato valido");
}

/* #### consideracion  */

/* - Aquí, number no es una cadena válida ni una variable,ni
un tipo de dato devuelto po typeof,  que puedas 
comparar directamente. En JavaScript, si deseas comparar 
el tipo de la variable tuEdad, primero deberías usar typeof, 
pero recuerda que la función prompt() siempre devuelve un string. */

/* =====================================
=         LEER: Ejemplo 2              =
===================================== */

const tuEdad2 = prompt("Por favór ingresa tu edad");
console.log("El valor ingresado es un", typeof tuEdad2);

if (typeof tuEdad2 === "number") {
  console.log("Tu edad es " + tuEdad2);
} else {
  console.log("debes ingresar un dato valido");
}

/* - al agregar el typeOf efectivamente se evalua correctamente
el tipo de dato prompt devuelve un string y no coincide con number.


Cuando el usuario ingresa un valor: 
prompt() devuelve una cadena de texto (string).

Cuando el usuario deja el campo vacío y presiona "Aceptar": 
prompt() devuelve una cadena vacía ("").

Cuando el usuario presiona "Cancelar": 
prompt() devuelve null.  */

/* al agregar el typeOf efectivamente se evalua correctamente
el tipo de dato prompt devuelve un string*/

/* =====================================
            LEER: Ejemplo 3            =
===================================== */

const tuEdad3 = parseInt(prompt("Por favór ingresa tu edad"));
console.log("El valor ingresado es un", typeof tuEdad3);

if (typeof tuEdad3 === "number") {
  console.log("Tu edad es " + tuEdad3);
} else {
  console.log("debes ingresar un dato valido");
}

/* #### consideración 

- Aqui el usuario ingresa un string , parseInt intenta
parsearlo y al encontrarse con string arroja esto no es
numero. */

/* =====================================
=          LEER: Ejemplo 4              =
===================================== */

const tuEdad4 = parseInt(prompt("Por favór ingresa tu edad"));

if (tuEdad4 === null) {
  console.log("Debes ingresar al menos un dato");
} else if (isNaN(tuEdad4)) {
  console.log("Debes ingresar un dato valido");
} else {
  console.log("tu edad es " + tuEdad4);
}

/* #### consideración

- Nunca se entra en la primera condicion ya que parseInt va a transformar
null en un NaN por lo tanto siempre se entra o en la segunda o en la tercera */

/* =====================================
=       LEER: 2 soluciones posibles     =
===================================== */

const tuEdad5 = prompt("Por favor ingresa tu edad");
if (tuEdad5 === null || tuEdad5 === "") {
  console.log("Debes ingresar un dato");
} else if (isNaN(parseInt(tuEdad5))) {
  console.log("Debes ingresar un dato válido");
} else {
  console.log("Tu edad es " + parseInt(tuEdad5));
}

/* #### consideración 

- Verificamos si el usuario presionó "Cancelar"
- Verificamos si la entrada no se puede convertir a un número
- Si es un número válido */

// isNaN(123);        // false
// isNaN("123");      // false
// isNaN("123abc");   // true
// isNaN(true);       // false
// isNaN(false);      // false
// isNaN("hello");    // true
// isNaN({});         // true

const tuEdad6 = prompt("Por favor ingresa tu edad");

if (!tuEdad6) {
  // Si el valor es null (cancelar) o está vacío
  console.log("Debes ingresar un dato");
} else if (isNaN(Number(tuEdad6)) || Number(tuEdad6) <= 0) {
  // Si no es un número o si el número es menor o igual a 0
  console.log("Debes ingresar un número válido");
} else {
  // Si es un número válido
  console.log("Tu edad es " + Number(tuEdad6));
}

/* =====================================
=               LEER: Ejemplo 6        =
===================================== */

let nombre = prompt("Por favor ingresa tu Nombre");
console.log(typeof nombre);

if (nombre === "") {
  console.log("porfavor ingresa un nombre ");
} else {
  console.log("tu nombre es " + nombre);
}

/* #### consideración

- al ingresar un numero aun se puede emitir el mensaje */

/* =====================================
=        LEER: Ejemplo 7                =
===================================== */

let nombre1 = prompt("Por favor ingresa tu Nombre");
console.log(typeof nombre1);

if (nombre1 === "" || !isNaN(nombre1)) {
  console.log("porfavor ingresa un nombre valido");
} else {
  console.log("tu nombre es " + nombre1);
}

/* #### consideración

- !isNaN(nombre1): Comprueba si el valor ingresado es un número. 
La función isNaN() devuelve true si el valor no es un número por lo tanto, 
al usar !isNaN(nombre), estamos verificando si nombre `ES un número. */

/* =====================================
=         LEER: if Else if             =
===================================== */

let nombre2 = prompt("Por favor ingresa tu Nombre");

// Validar el nombre ingresado
if (nombre2 === "") {
  console.log("Debes ingresar un nombre válido.");
} else if (!isNaN(nombre2)) {
  console.log("El nombre no puede ser un número.");
} else if (nombre2.length < 3) {
  console.log("El nombre debe tener al menos 3 caracteres.");
} else {
  console.log("Tu nombre es " + nombre2 + ".");
}

/* =====================================
=  LEER: Ejemplo con estaciones del año =
===================================== */

let mes = prompt("indica el numero de mes en el que te encuentras");
let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
  estacion = "verano";
} else if (mes >= 3 && mes <= 5) {
  estacion = "otoño";
} else if (mes >= 6 && mes <= 8) {
  estacion = "invierno";
} else {
  estacion = "primavera";
}

console.log("La estación correspondiente al mes", mes, "es", estacion);
