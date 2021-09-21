const input = document.getElementById("input")

const addButton = document.getElementById("add-button")
const removeButton = document.getElementById("remove-button")

const tasksList = document.getElementById("tasks-list")

const tasks = [];

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


    li.setAttribute('id', `task-${tasks.length}`)
    tasks.push(li)

    tasksList.appendChild(li);

    input.value = "";

    console.log(tasks)
})

removeButton.addEventListener('click', () => {
    
})