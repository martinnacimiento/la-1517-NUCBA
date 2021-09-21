// Un cliente nos pide desarrollar un kiosco digital para 
// automatizar el proceso de pedidos en su local físico, 
// y así cumplir con las normas de distanciamiento social 
// evitando el amontonamiento de personas. 
// Lo primero que debemos hacer, es pensar en la carta 
// de opciones que ofrecen: esto es, sus productos. 
// Vamos a suponer que sólo venden cuatro tipos de hamburguesas. 
// ------------------------------------------------------------------ 
// (1) Debemos desarrollar la función constructora para poder crearlas. 
// (1.a) La misma debe tener un: 
// * id (number type) 
// * name 
// * toppings 
// * price 
// (1.2) Los toppings deben ser una lista FIJA de ingredientes 
// que estén o no en la hamburguesa, pero siempre deben 
// figurar (estructura de datos booleanos). 
// De hecho, Toppings debería ser pensada como otra función constructora. 


// new Hamburgues()

// {
//     lechuga: true,
//     tomate: false,
//     cebolla:  true
// }

function Hamburguesa(id, name, toppings, price) {
    this.id = id
    this.name = name
    this.price = price
    this.toppings = toppings
}


function Toppings({ lechuga = false, tomate = false, cebolla = false }) {
    this.lechuga = lechuga
    this.tomate = tomate
    this.cebolla = cebolla
}

const toppings1 = new Toppings({ lechuga: true, queso: true })

const hamburguesa1 = new Hamburguesa(
    1,
    "Hamburquesa Triple con tomate",
    toppings1,
    500
)



console.log(hamburguesa1)
console.log(toppings1)

