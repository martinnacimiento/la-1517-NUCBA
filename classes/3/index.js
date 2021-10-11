// Imprimir números del 1 al 10

// let i = 0;
// for (; i < 11;) { 
//     console.log(i);
//     i++; 
// };


// #2 Imprime los números impares menores que 100


// for (let i = 1; i < 100; i += 2) { 
//     console.log(i);
// };

// Danilo

const numerosImpares = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            console.log('Numero par:', i)
        } else {
            console.log('Numero impar:', i)
        }
    }
}
numerosImpares()

// #3 Imprime la tabla de multiplicar con 7

// Literal llueve afuera aca