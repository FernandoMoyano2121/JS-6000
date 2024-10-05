let nombre = "Fernando";
let edad = 32;
let direccion = "Córdoba";

//Acceder a propiedades con nomenclatura del punto
console.log(persona.nombre);
//Acceder a propiedades con nomenclatura  corchetes
console.log(persona["edad"]);

//modificacion de propiedades mediante nomenclatura de corchetes
console.log((persona["direccion"] = "San Juan"));
console.log(persona.direccion);

//visualizar objeto en consola mediante console.table
console.log(persona);
console.table(persona);

persona.edad = 45;

console.table(persona);

//let nombre1 = prompt("Ingresa un nombre");

//toLowerCase()
let miNombre = "FERNANDO";

let miNombre1 = miNombre.toLowerCase();
console.log(miNombre2);

//toUpperCase()
let miNombre2 = "fernando";
let miNombre3 = miNombre.toUpperCase();
console.log(miNombre1);

console.log(miNombre1.length);

const persona = {
  nombre: "Fernando",
  edad: 32,
  direccion: "Córdoba",
};

//in
console.log("calle" in persona);

//for in
for (const propiedad in persona) {
  console.log(persona[propiedad]);
}

/* =====================================
  =      Clase Persona                =
  ===================================== */

class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;

    this.hablar = function () {
      alert(`Hola soy ${this.nombre}`);
    };
  }
}

const persona1 = new Persona("Carlos", 30, "Cordoba");
const persona2 = new Persona("Adriana", 20, "Mendoza");

persona1.hablar();
persona2.hablar();

/* =====================================
=          Clase Producto              =
===================================== */

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.stock = stock;
  }

  //MEtodo para actualizar cantidad del producto
  actualizarStock(nuevoStock) {
    if (nuevoStock > 0) {
      this.stock = nuevoStock;
      console.log(`La cantidad del producto ${this.nombre} se actualizo`);
    }
  }

  verificarStock() {
    if (this.stock > 0) {
      console.log(`El producto ${this.nombre} esta en stock`);
    } else {
      console.log(`El producto ${this.nombre} no está en stock`);
    }
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje > 0 && porcentaje < 100) {
      this.precio = this.precio - (this.precio * porcentaje) / 100;
      console.log(
        `Se ha aplicado un ${porcentaje}% de descuento al producto ${this.nombre}`
      );
    } else {
      console.log(`El porcentaje de descuento no es valido`);
    }
  }
}

const producto1 = new Producto("cafe", 6000, 6);
producto1.verificarStock();
producto1.actualizarStock(10);

console.table(producto1);
