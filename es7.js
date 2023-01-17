const valoresBase = [ 1, 2, 3, 4, 5 ]
let newValues = valoresBase.map(elem => elem ** 3)
console.log(newValues)

if (newValues.includes(28)) console.log('Si está')