//spread operator
const obj1 = {
    propiedad1: 1,
    propiedad2: 2,
    propiedad3: 3,
}
const obj2 = {
    propiedad4: 4,
    propiedad5: 5,
}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj4 = obj1
// obj1.propiedad1 = 9
// console.log(obj1)
// console.log(obj4)

// const obj4 = {...obj1}
// obj1.propiedad1 = 9
// console.log(obj1)
// console.log(obj4)

let {propiedad1, propiedad3} = obj1  //destructuring
console.log(propiedad1)

