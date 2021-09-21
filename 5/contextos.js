let nombre = 'Nucba'

const fn = (cb) => {
    let nombre = "Nucba FN"
    const fn2 = () => {
        console.log(nombre)
    }
    fn2()
}


fn()

console.log(nombre)