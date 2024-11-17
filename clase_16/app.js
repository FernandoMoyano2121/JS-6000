/* =====================================
=               Fetch                =
===================================== */
/* **Generalmente, se transfieren datos en formato JSON. Por lo tanto, 
para obtener el contenido de la respuesta debemos aplicar el método .json() 
a ese objeto. Éste retorna a su vez una Promesa, por lo que capturamos su 
contenido (los datos enviados por la API) en un segundo .then() :** */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

/* Cada elemento tiene propiedades body, id, title, userId. Estamos trabajando 
con el parámetro data definido que es un array de objetos. Por ello, podemos 
recorrerlo y acceder a sus objetos y propiedades 🧐: */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data[0].title);
    console.log(data[0].body);
  });
/* =====================================
=       fetch a la api fake Store      =
===================================== */

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

/* =====================================
=       fetch con query params        =
===================================== */

/* Utiliza `_limit` para especificar cuántos elementos quieres.
Usa `_start` como el equivalente a `offset` para especificar el índice inicial. */

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10_start=10")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
      `;
      lista.append(li);
    });
  });

/* =====================================
  =               PokeApi                =
  ===================================== */

/* traer Pokemons por tipo */
/* https://pokeapi.co/api/v2/type/{type_name}/  */

/* Traer Pokemons por genero */
/* https://pokeapi.co/docs/v2#genders */

/* limit y offset */

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=20")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

/* =====================================
=      Fetch con archivos locales      =
===================================== */

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");

      li.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>`;

      lista.append(li);
    });
  });

/* =====================================
  =               Async Await                =
  ===================================== */

/* **El método fetch retorna una promesa. De forma sincrónica, si guardamos esta 
promesa en una variable veremos la promesa pendiente, porque esto 
sucede sincrónicamente:** */

const pedirPosts = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
  `;
    lista.append(li);
  });
};

pedirPosts();

/* =====================================
=      Fetch con funciones separados    =
===================================== */

const pedirDatos = async () => {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10_start=10"
  );
  const data = await resp.json();
  mostrarPosts(data);
  /*  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    `;

    lista.append(li); */
};

const mostrarPosts = (data) => {
  const lista = document.getElementById("listado");

  data.forEach((post) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    `;

    lista.append(li);
  });
};

pedirDatos();
