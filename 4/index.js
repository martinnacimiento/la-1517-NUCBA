// Imprime todas las tablas de multiplicar con números del 1 al 10
const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cantidad = 10;

function map (fn) {
    const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arrayNuevo = []
    for (let index = 0; index < elementos.length; index++) {
        let valorNuevo = fn(elementos[index]);
        arrayNuevo.push(valorNuevo)
    }
    return arrayNuevo;
}

tablas.forEach((elemento) => { 
    for (let i = 1; i <= cantidad; i++) { 
        console.log(elemento + " x" + " " + i + " =" + (elemento * i)) 
    } 
})

// Fran
// const tableMultiply = (numtable) => { let resultable = 0; for (let i = 1; i < 11; i++) { resultable = numtable * i; console.log(`${numtable} x ${i} = ${resultable}`); } }; 
// tableMultiply(1); tableMultiply(6); tableMultiply(8); tableMultiply(4); tableMultiply(7); 