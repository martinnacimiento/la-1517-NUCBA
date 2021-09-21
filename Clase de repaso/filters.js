const isPositive = value => value > 0
const isNegative = value => value < 0
const isMajorFive = value => value > 5




const divider = (arr) => {
    const positivos = []
    const negativos = []
  
  arr.forEach( v => {
    if (v < 0) {
      negativos.push(v)
    } else {
      positivos.push(v)
    }
  })
 return {
     negativos,
     positivos
 }
}

module.exports = {
    isPositive,
    isNegative,
    isMajorFive,
    divider
}