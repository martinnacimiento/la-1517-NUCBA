const producto = {
    name: "Zapatilla",
    price: 45
}
console.log(producto)

class Producto {
    constructor(name, price) {
      this.name = name
      this.price = price
    }
  
    sayPrice = () => {
      console.log(this.price)
    } 
}

class Zapatilla extends Producto {
    constructor(name, price, color) {
      super(name, price)
      // this.name = name
      // this.price = price
      this.color = color
    }
  
    sayColor = () => console.log(this.color)
  
}

const producto1 = new Producto('Zapatilla Mike', 4500)
producto1.sayPrice()
// console.log(producto1)

const zapatilla = new Zapatilla('Zapatilla Adides', 6500, "azul")
zapatilla.sayColor()
zapatilla.sayPrice()