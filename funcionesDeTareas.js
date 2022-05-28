const fs = require("fs");
const listaDeTareas = require("./tareas.json")
const archivo = "./tareas.json"

const leerArchivo = function(){
    let tareas = fs.readFileSync(archivo,"utf-8");
    return JSON.parse(tareas)
}

const crearTarea = function(titulo){
    this.titulo = titulo
    this.estado = "pendiente"
}

const agregarTarea = function(tarea){
    listaDeTareas.push(tarea)
    fs.writeFileSync("./tareas.json",JSON.stringify(listaDeTareas,null,3))
    return leerArchivo()
}

const filtrarPorEstado = function(estado){
    let tareas = leerArchivo()
    let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
    return tareasFiltradas
}

const actualizarEstado = function(tarea,nuevoEstado){
    let tareas = leerArchivo()
    let tareasActualizadas = tareas.map(tarea => {
        if(tarea.titulo === titulo){
            return {
                titulo,
                estado : nuevoEstado
            }
        }
        return tarea
    })
}


module.exports = {
    archivo,
    leerArchivo,
    crearTarea,
    agregarTarea,
    filtrarPorEstado,
    actualizarEstado,
    buscarTarea
}