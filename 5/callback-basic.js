const queOnda = () => {
    console.log("Que onda?")
}

const saludar = (cb) => {
    console.log('Hola!')
    cb()
}

saludar(queOnda)