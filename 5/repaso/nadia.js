// Este fue el mas difícil para mi, Tincho: 4. 
// Imprimir todas las tablas de multiplicar de 1 al 10 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach(element => {
    for (let n = 0; n <= 10; n++) {
        console.log(element * n)
    }
});

// numeros.forEach(element => {
//     for (n = 0; n <= 10; n++) {
//         console.log(`${element
// } multiplicado por ${n} da como resultado ${element * n}`)
//     }
// });