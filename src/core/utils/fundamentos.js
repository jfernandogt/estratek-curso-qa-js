const sum = (a, b) => a - b
const substract = (a, b) => a - b

let result = sum(5, 1)
let expected = 6

if (result !== expected) {
  throw new Error(`${result} no es igual a ${expected}`)
}

result = substract(5, 1)
expected = 4

if (result !== expected) {
  throw new Error(`${result} no es igual a ${expected}`)
}
