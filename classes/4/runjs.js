const productos = [true, true, true]
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const texto = 'Hola a todos'

const fnImprimir = function (valor) {
  return valor * 2
}

// valores.forEach(fnImprimir)

// valores.map(fnImprimir)

// console.log(valores)


// productos.some(p => p === false)

function map (fn) {
    const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arrayNuevo = []
    for (let index = 0; index < elementos.length; index++) {
        let valorNuevo = fn(elementos[index], index);
        arrayNuevo.push(valorNuevo)
    }
    return arrayNuevo;
}

map((e) => {
   return e * 2
})



const producto1 = {
    nombre: 'Zapatilla Mike SBCheck',
    precio: 20000,
    categoria: 'Zapatilla',
    importado: true
  }
  
  const producto2 = {
    nombre: 'Zapatilla Adides Blanca',
    precio: 25000,
    categoria: 'Zapatilla',
    importado: false,
  }
  
  const zapatillas = [ producto1, producto2 ]
  
  zapatillas.map((producto) => {
    return { ...producto, precio: producto.precio * 2 }
  })
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     










