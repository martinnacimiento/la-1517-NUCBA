
const button = document.getElementById("button");
const div = document.getElementById("prueba");

// button.addEventListener('click', )

button.addEventListener("click", function () {
    
    
    const players = ['MESSI', 'DI MARIA', 'ROSSI'];
    
    players.forEach(player => {
        // CREAMOS EL ELEMENTO
        const h4 = document.createElement('h4')
        h4.textContent = player;
        h4.setAttribute('class', 'color')

        // LO AGREGAMOS AL DOM DENTRO DEL DIV
        div.appendChild(h4)
    })

    // event.target.innerHTML = "Conteo de Clicks: " + event.detail;
});

