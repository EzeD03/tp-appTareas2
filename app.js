const process = require("process");

const { crearTarea, agregarTarea, encontrarTarea, filtrarPorEstado, leerArchivo, buscarTarea } = require("./funcionesDeTareas")
const listaDeTareas = require("./tareas.json");

const tareas = leerArchivo()
const accion = process.argv[2].toLowerCase();
const acciones = ["listar","crear","filtrar"]

switch (accion) {
    case acciones[0]:
        console.log("Listado de tareas\n-----------------");
        tareas.forEach((tarea, i) => {
            console.log(`(${i + 1}). ${tarea.titulo} - ${tarea.estado}`);
        });
        break;

    case acciones[1]:
        let tareaNueva = new crearTarea(process.argv[3].toLowerCase())
        agregarTarea(tareaNueva)
        console.log("Tarea agregada correctamente.\n---------------");
        break

    case acciones[2]:
        let tareasFiltradas = filtrarPorEstado(process.argv[3])
        tareasFiltradas.forEach((tarea,i) => {
            console.log(`(${i + 1}). ${tarea.titulo} - ${tarea.estado}`);
        });
        break

    case undefined:
        console.log(`\nAtención - Tienes que pasar una acción.\nLas acciones disponibles son: "${acciones}"\n--------------------------------------`);
        break

    default:
        console.log(
        `--------------------------------------\nNo entiendo qué quieres hacer.\nLas acciones disponibles son: "${acciones}"\n--------------------------------------`);
        break;

}
console.log(buscarTarea(process.argv[3].toLowerCase()))