const inputBox = document.getElementById('input-box');
const alertList = document.querySelector('.advert');
const listContainer = document.querySelector('.list-container');

//Funcion para añadir nueva tarea.
function addTask() {

    if (inputBox.value === '') {
            var alert = document.createElement('p');
            alert.innerHTML = 'Add text to create a new task.';
            alertList.appendChild(alert);
        
            setTimeout(() => {
                alertList.removeChild(alert);
            }, 3000);
    }else{
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}

//Función para añadir tareas con la tecla enter.
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask(); 
    }
});

//Función para marcar como hecho o borrar las diferentes tareas segun si pulsas un "li" o un "span".
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); //Se aplica la función saveData() después de añadir la clase para que después se mantenga la clase "checked".
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();//Se aplica la función saveData() después de pulsar el "span" se borre y no se quede guardado en local..
    }
}, false);

//Función para guardar toda la información en local.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

//Función para recuperar toda la información añadida anteriormente con la función saveData()-
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();