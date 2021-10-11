// let llueve = true let auto = true let paraguas = true let salgo = true function salir () { if(llueve ==paraguas) { return "Si llueve y tengo paraguas voy a salir" } else if (llueve == auto || llueve == paraguas) { return "Si llueve y tengo auto o paraguas voy a salir" } else return "No salgo por que me mojo" } 

// Si llueve y tengo paraguas voy a salir
// const llueve = true
// const tengoParaguas = true

// const salgo = llueve && tengoParaguas
// console.log(salgo)

// Si llueve y tengo auto o paraguas voy a salir
const llueve = true
const tengoAuto = false
const tengoParaguas = false

const salir = llueve && (tengoAuto || tengoParaguas)
console.log(salir)