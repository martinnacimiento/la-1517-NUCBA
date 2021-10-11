const values = [-1, -2, 3, 6, 9, -9] 

const filters = require('./filters')

const positivos = [3]
const negativos = [4]

const filtered = values.filter(filters.isPositive)
console.log(filters.divider(values))
// values.filter(isNegative)
// values.filter(isMajorFive)
console.log(filtered)

for (let index = 0; index < values.length; index++) {
    const element = array[index];
    
}