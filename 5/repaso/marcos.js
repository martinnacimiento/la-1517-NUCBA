const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tablas = (numero) => {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`La multiplicacion entre ${numero} y ${i} es ${resultado}`)
    }
}

tablas(2)

numeros.forEach(tablas);