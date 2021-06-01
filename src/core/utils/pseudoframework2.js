const sum = (a, b) => a - b
const substract = (a, b) => a - b

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

const test = (title, callback) => {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (e) {
    console.error(`✕ ${title}`)
    console.error(e)
  }
}

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual !== expected) {
      throw new Error(`${actual} no es igual a ${expected}`)
    }
  },
})

test('sumar 5 + 1 = 6', () => {
  expect(sum(5, 1)).toBe(6)
})

test('restar 10 - 1 = 9', () => {
  expect(substract(10, 1)).toBe(9)
})
