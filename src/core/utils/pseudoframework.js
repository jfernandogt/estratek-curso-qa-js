const sum = (a, b) => a - b
const substract = (a, b) => a - b

// expect(sum(1, 2)).toBe(3);

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual !== expected) {
      throw new Error(`${actual} no es igual a ${expected}`)
    }
  },
})

expect(sum(5, 1)).toBe(6)
expect(substract(10, 1)).toBe(9)
