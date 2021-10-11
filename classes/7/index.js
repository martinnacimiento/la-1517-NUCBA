const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

for (let i = 0; i < semana.length; i++) {
    dia = semana[i]
    if (dia === 'sabado') {
        console.log('Es sabado')
    } else if (dia === 'domingo') {
        console.log('Es domingo')
    } else {
        console.log('Es dia de semana')
    }
}