// funcion con parametro numerico para separar los dias de semana de los findes 
let diasHabiles = ["lunes", "martes", "miercoles", "jueves", "viernes"] 
let finesDeSemana= ["sabado", "domingo"] 

function semanas(dia) {
    console.log("dia vale:", dia) 
    if(dia < 6) 
        console.log(diasHabiles) 
    else 
        console.log(finesDeSemana) 
} 

semanas(4); 