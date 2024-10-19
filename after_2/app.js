const productos = [
  {
    id: 1,
    nombre: "Leche",
    imagen:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    precio: 1500,
    stock: 14,
  },
  {
    id: 2,
    nombre: "Arroz",
    imagen:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    precio: 1000,
    stock: 12,
  },
  {
    id: 3,
    nombre: "Cafe",
    imagen:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    precio: 2500,
    stock: 32,
  },
];

const agregarProductos = ({ nombre, precio, imagen, stock }) => {
  productos.push({ id: 4, nombre, precio, imagen, stock });
};

const mostrarProductos = () => {
  let mensajeInformativo = "";
  for (let producto of productos) {
    mensajeInformativo += `

    ID : ${producto.id}
    Nombre : ${producto.nombre}
    Precio : ${producto.precio}
    Imagen : ${producto.imagen}
    Stock : ${producto.stock}\n

    `;
  }
  console.log(mensajeInformativo);
};

const solicitarDatosDelProducto = () => {
  let nombreProducto = prompt("Ingresa el nombre del producto");
  let imagen = prompt("Por favor ingresa la URL de la imagen");
  let precioDelProducto = parseFloat(
    prompt("A continuacion ingresa el precio")
  );
  let stock = parseInt(
    prompt("Por favor ingresa la cantidad de unidades disponible")
  );
  if (nombreProducto && !isNaN(precioDelProducto) && imagen && !isNaN(stock)) {
    return { nombre: nombreProducto, precio: precioDelProducto, imagen, stock };
  } else {
    alert("Por ingresa datos validos");
  }
};

const eliminarProducto = (nombre) => {
  const indice = productos.findIndex(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (indice !== -1) {
    productos.splice(indice, 1);
    console.log(`Producto ${nombre} eliminado con exito`);
    mostrarProductos();
  } else {
    alert(`Producto ${nombre} no encontrado`);
  }
};

const encontrarProductosBaratos = (precioMaximo) => {
  const productosBaratos = productos.filter(
    (producto) => producto.precio < precioMaximo
  );

  if (productosBaratos.length > 0) {
    console.log("Productos mas baratos que " + precioMaximo + ":");

    productosBaratos.map((producto) => {
      console.log(producto.nombre);
    });
  } else {
    console.log("No hay productos mas baratos que :" + precioMaximo);
  }
};

const main = () => {
  let opcion = "";

  while (opcion !== "5") {
    opcion = prompt(
      "Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar producto \n4. Productos Baratos \n5. Salir"
    );

    switch (opcion) {
      case "1":
        const nuevoProducto = solicitarDatosDelProducto();
        if (nuevoProducto) {
          agregarProductos(nuevoProducto);
        }
        break;

      case "2":
        mostrarProductos();
        break;

      case "3":
        const productoAElimar = prompt(
          "ingresa el nombre del producto a elimar"
        );
        eliminarProducto(productoAElimar);
        break;

      case "4":
        const precioMaximo = parseFloat(
          prompt("Ingresa el precio maximo para encontrar productos baratos")
        );
        encontrarProductosBaratos(precioMaximo);
        break;

      case "5":
        console.log("Saliendo...");
        break;

      default:
        alert("Opcion no valida . Por favor selecciona de nuevo");
    }
  }
};

main();
