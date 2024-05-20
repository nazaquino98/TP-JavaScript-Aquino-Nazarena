
let tarea = [];

function agregarTarea() {
    let nombreTarea = prompt("Ingresa el nombre de la nueva tarea");
    if (nombreTarea && nombreTarea.trim() !== "") {
        tarea.push(nombreTarea);
        alert("Tarea " + nombreTarea + " agregada");
        listaTarea();
    } else {
        alert("El nombre de la tarea no puede estar vacio ni contener espacios al principio ni al final");
    }
}


function listaTarea() {
    if (tarea.length === 0) {
        alert("No hay tareas en la lista");
    } else {
        let lista = "Lista de Tareas:\n";
        tarea.forEach((t, indice) => { 
            lista += `${indice + 1}. ${t}\n`; 
        });
        alert(lista);
    }
}

function editarTarea() {
    let nombreOriginal = prompt("Ingresa el nombre de la tarea que deseas editar");
    let tareaIndice = tarea.indexOf(nombreOriginal);
    if (tareaIndice !== -1) {
        let nuevoNombre = prompt("Ingresa el nuevo nombre para la tarea");
        if (nuevoNombre) {
            tarea[tareaIndice] = nuevoNombre;
            alert("Tarea " + nombreOriginal + " ha sido renombrada a " + nuevoNombre);
            listaTarea();
        } else {
            alert("El nuevo nombre de la tarea no puede estar vacío ni contener espacios al principio ni al final");
        }
    } else {
        alert("La tarea" + nombreOriginal + " no existe en la lista");
    }
}

function eliminarTarea() {
    let nombreTarea = prompt("Ingresa el nombre de la tarea que deseas eliminar");
    let tareaIndice = tarea.indexOf(nombreTarea);
    if (tareaIndice !== -1) {
        tarea.splice(tareaIndice, 1);
        alert("Tarea " + nombreTarea + " eliminada");
        listaTarea();
    } else {
        alert("La tarea " + nombreTarea + " no existe en la lista");
    }
}

while (mensaje<5) {
let opciones = "Elige una de las siguientes opciones:\n";
opciones += "1. Agregar tarea\n";
opciones += "2. Listar tareas\n";
opciones += "3. Editar tarea\n";
opciones += "4. Eliminar tarea\n";
opciones += "5. Salir\n";


let mensaje = parseInt(prompt(opciones));


switch (mensaje) {
    case 1:
        agregarTarea();
        break;
    case 2:
        listaTarea();
        break;
    case 3:
        editarTarea();
        break;
    case 4:
        eliminarTarea();
        break;
    case 5:
        alert("Saliendo del Administrador de Tareas");
        break;
    default:
        alert("Opción invalida. Elija una opción del 1 al 5");
}
}