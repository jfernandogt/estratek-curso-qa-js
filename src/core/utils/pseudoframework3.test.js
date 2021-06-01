const { sum, substract } = require('./pseudoframework3')
test('sumar 5 + 1 = 6', async () => {
  const result = await sum(5, 1)
  console.log('result', result)
  expect(result).toBe(6)
})

test('restar 10 - 1 = 9', () => {
  expect(substract(10, 1)).toBe(9)
})
