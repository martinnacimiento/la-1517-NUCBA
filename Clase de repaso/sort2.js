const array1 = [1, 4, 2, 47, 5]
const array2 = [-1, -5, 45, -14, 5]


const arrayFinal = [...array1, ...array2]

// Tenemos que ir iterando en cada elemento
// Extraer el minimo

const arraySorted = []
let counter = 0
while (arrayFinal.length > 0) {
    const min;
    for (let index = 0; index < arrayFinal.length - 1; index++) {
        

        const next = arrayFinal[index + 1];
        const current = arrayFinal[index]
        if (next < current) {
            let aux = arrayFinal[index]
            arrayFinal[index] = arrayFinal[index + 1]
            arrayFinal[index + 1] = aux;
            isSwitch = true;
        }

    }

    if (!isSwitch) {
        sorted = true
    }
    counter++

    console.log("STATUS", counter, arrayFinal)
}

console.log(arrayFinal)
console.log(counter)