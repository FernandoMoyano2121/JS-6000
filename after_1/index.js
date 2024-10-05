function mostrarProductos() {
  let catalogo = "Catálago de productos: \n";
  catalogo += "1. Carne- $5000 \n";
  catalogo += "2. Carbon- $3000 \n";
  catalogo += "3. Lechuga- $2000 \n";
  catalogo += "4. Tomate- $1000 \n";
  return catalogo;
}

function comprarProducto() {
  let total = 0;
  let seguirComprando = true;

  while (seguirComprando) {
    let catalogo = mostrarProductos();
    let eleccion = prompt(
      catalogo +
        "Que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar "
    );

    //verificamos si el usuario ingreso un dato
    if (eleccion === null || eleccion === "") {
      alert("No has ingresado un datos valido");
      continue;
    }

    //verificamos si el usuario ingreso salir
    if (eleccion === "salir") {
      break;
    }

    eleccion = parseInt(eleccion);

    //verificamos que el dato este en el rango sea numero
    if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
      alert("Producto no valido, selecciona nuevamente");
      continue;
    }

    if (eleccion === 1) {
      total += 5000;
      alert("Has agregado Carne ");
    } else if (eleccion === 2) {
      total += 3000;
      alert("Has agregado Carbon ");
    } else if (eleccion === 3) {
      total += 2000;
      alert("Has agregado Lechuga ");
    } else if (eleccion === 4) {
      total += 1000;
      alert("Has agregado tomate ");
    }

    let resupuesta = prompt("quieres seguir comprando? (si/no)");
    //seguirComprando = prompt("quieres seguir comprando? (si/no)") === "si";

    if (resupuesta === "si") {
      seguirComprando = true;
    } else {
      seguirComprando = false;
    }
  }

  alert(`Gracias por su compra . El total es ${total}`);
}

comprarProducto();
