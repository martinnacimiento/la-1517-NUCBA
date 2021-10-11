const { api } = require('./api')

const getCars = () => {
    console.log("Recuperando Cars")
    let cars = "cars"
    setTimeout(() => {
        cars = api.getCars()
        console.log("Llego Cars")
    }, 6000)
    
    return cars
}

const getProducts = () => {
    console.log("Recuperando Products")
    let products = "products"
    setTimeout(() => {
        products = api.getProducts()
        console.log("LLego products")
    }, 9000)
    
    return products
}

const cars = getCars()
const products = getProducts()
console.log(cars)
console.log(products)