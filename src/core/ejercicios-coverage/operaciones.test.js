import operaciones from './operaciones'
test('sumar 5 + 1 = 6', () => {
  expect(operaciones(['sumar', 5, 10])).toBe(15)
})

test('restar 10 - 5 = 5', () => {
  expect(operaciones(['restar', 10, 5])).toBe(5)
})

test('No existe un comando', () => {
  expect(operaciones(['random'])).toBe(undefined)
})
