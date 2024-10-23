const nombreTarea = document.getElementById("nombreTarea");
const prioridadTarea = document.getElementById("prioridadTarea");
const fechaVencimiento = document.getElementById("fechaVencimiento");
const agregarTarea = document.getElementById("agregarTarea");
const listadoTareas = document.getElementById("listadoTareas");
const tareasPendientes = document.getElementById("tareasPendientes");

const tareas = [
  {
    id: 1,
    nombre: "Hacer Compras",
    prioridad: "Baja",
    completada: false,
    vencimiento: "2024-09-23",
  },
  {
    id: 2,
    nombre: "Estudiar",
    prioridad: "Baja",
    completada: false,
    vencimiento: "2024-09-23",
  },
  {
    id: 3,
    nombre: "Lavar ropa",
    prioridad: "Baja",
    completada: false,
    vencimiento: "2024-09-23",
  },
];

let proximoId = 4;

const renderizarTareas = () => {
  listadoTareas.innerHTML = "";

  tareas.forEach((tarea) => {
    const itemTarea = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const infoTarea = document.createElement("span");

    infoTarea.textContent = `Tarea: ${tarea.nombre}| Prioridad | ${tarea.prioridad} | Vencimiento : ${tarea.vencimiento}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarTarea(tarea.id));

    itemTarea.append(checkbox);
    itemTarea.append(infoTarea);
    itemTarea.append(botonEliminar);
    listadoTareas.append(itemTarea);
  });
};

const agregarTareas = () => {
  const nombre = nombreTarea.value;
  const prioridad = prioridadTarea.value;
  const vencimiento = fechaVencimiento.value;

  if (nombre && prioridad && vencimiento) {
    tareas.push({
      id: proximoId++,
      nombre: nombre,
      prioridad: prioridad,
      vencimiento: vencimiento,
      completada: false,
    });
    renderizarTareas();
  } else {
    alert("Rellena todos los campos");
  }
};

const eliminarTarea = (id) => {
  const indice = tareas.findIndex((tarea) => tarea.id === id);

  if (indice !== -1) {
    tareas.splice(indice, 1);
    renderizarTareas();
  }
};

const mostrarTareasPendientes = () => {};
const marcarComoCompletada = () => {};

renderizarTareas();
agregarTarea.addEventListener("click", agregarTareas);
