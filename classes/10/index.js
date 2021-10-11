const input = document.getElementById("input")

const addButton = document.getElementById("add-button")
const removeButton = document.getElementById("remove-button")

const tasksList = document.getElementById("tasks-list")



addButton.addEventListener('click', () => {
    const value = input.value
    
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const span = document.createElement('span')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('click', (e) => {
        if (e.target.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    })

    
    span.textContent = value;
    li.append(checkbox, span);


    // li.setAttribute('id', `task-${tasks.length}`)

    tasksList.appendChild(li);

    input.value = "";


})

removeButton.addEventListener('click', () => {
    // task1: tener acceso a las tareas
    const tasks = tasksList.querySelectorAll('li')
    console.log(tasks)

    // task2: recorrer el array de tasks
    // task3: tengo que filtrar las tareas con checked en true
    // task4: eliminar esas tareas filtradas

    const elementsFiltered = []
    tasks.forEach(task => {
        if (task.childNodes[0].checked) {
            // tasksList.removeChild(task)
            task.remove()
        }
    })

    console.log("ALBANO QUERIA SABER", tasks)
    console.log("ALBANO QUERIA SABER", tasksList)

})