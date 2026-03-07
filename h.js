let numbers = [1,2,3,4,5,6,7,8]
let doubleNumbers = numbers.map(i => i*2)
console.log(doubleNumbers)

let lower  = numbers.filter(num => num < 6)
console.log(lower)


numbers.forEach(num => console.log(num))