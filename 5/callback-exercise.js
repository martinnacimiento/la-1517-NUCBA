// Hace mucho tiempo viajo por todo el mundo 🗺️, hice muchos viajes y en cada uno de ellos he visitado muchos paises, tambien he vistado muchos lugares de paises

// Construir una function que pueda imprimir estos mensajes de ejemplo:
// - He visitado 🇧🇷
// - He visitado 'Rio de Janeiro'

// Y que al final pueda decir 'He terminado mi viaje, vuelvo a Casa!'

// Restricciones:
// 1. Los literales de estos textos no pueden estar dentro de la definicion de la funcion


// Lo que se espera: es que el mensaje 'He visitado 🇧🇷' pueda decirse en otros idiomas pero sin cambiar la implementacion de la function creada

const paises = ['🇧🇷', '🇦🇺', '🇧🇴', '🇦🇷', '🇯🇵', '🇮🇹', '🇷🇺']
const lugares = ['Rio', 'Roma', 'BsAs', 'Tokyo', 'La Paz', 'Moscu']

function print(locations, sayLocation, sayFinal) {
  locations.forEach(sayLocation)
  sayFinal()
}


print(
  paises, 
  p => console.log(`He visitado ${p}`), 
  () => console.log('He terminado mi viaje, vuelvo a casa!!')
)

// Hace mucho tiempo viajo por todo el mundo 🗺️, hice muchos viajes y en cada uno de ellos he visitado muchos paises, tambien he vistado muchos lugares de paises

// Construir una function que pueda imprimir estos mensajes de ejemplo:
// - He visitado 🇧🇷
// - He visitado 'Rio de Janeiro'

// Y que al final pueda decir 'He terminado mi viaje, vuelvo a Casa!'

// Restricciones:
// 1. Los literales de estos textos no pueden estar dentro de la definicion de la funcion


// Lo que se espera: es que el mensaje 'He visitado 🇧🇷' pueda decirse en otros idiomas pero sin cambiar la implementacion de la function creada

const paises = ['🇧🇷', '🇦🇺', '🇧🇴', '🇦🇷', '🇯🇵', '🇮🇹', '🇷🇺']
const lugares = ['Rio', 'Roma', 'BsAs', 'Tokyo', 'La Paz', 'Moscu']

function print(locations, sayLocation, sayFinal) {
  locations.forEach(sayLocation)
  sayFinal()
}


print(
  paises, 
  p => console.log(`He visitado ${p}`), 
  () => console.log('He terminado mi viaje, vuelvo a casa!!')
)



function doTo5(anything) {
  return anything(5)
}

function divide10ByN(n) {
  return 10 / n
}

function multiply10ByN(n) {
  return 10 * n
}

doTo5(divide10ByN) // 2
doTo5(multiply10ByN) // 10