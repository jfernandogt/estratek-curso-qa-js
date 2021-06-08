import isPasswordAllowed from './isPasswordAllowed'
import cases from 'jest-in-case'

cases(
  'isPasswordAllowed: contraseñas válidas',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(true)
  },
  {
    'contraseña válida': {
      password: '!aBc123',
    },
  }
)

cases(
  'isPasswordAllowed: contraseñas inválidas',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(false)
  },
  {
    'muy pequeña': {
      password: 'a2c!',
    },
    'sin caracteres alfabeticos': {
      password: '123456!',
    },
    'sin números': {
      password: 'ABCdef!',
    },
    'sin mayúsculas': {
      password: 'abc123!',
    },
    'sin minúsculas': {
      password: 'ABC123!',
    },
    'sin números alphanuméricos': {
      password: 'ABCdef123',
    },
  }
)

// válido:
// - !aBc123
//
// no válido:
// - a2c! // muy pequeña
// - 123456! // sin caracteres alfabeticos
// - ABCdef! // sin números
// - abc123! // sin mayúsculas
// - ABC123! // sin minúsculas
// - ABCdef123 // sin números alphanuméricos

// describe('Probar isPasswordAllowed varios expect', () => {
//   test('isPasswordAllowed debería retornar true cuando la contraseña es válida', () => {
//     expect(isPasswordAllowed('!aBc123')).toBe(true)
//   })

//   test('isPasswordAllowed debería retornar false cuando la contraseña es inválida', () => {
//     expect(isPasswordAllowed('a2c!')).toBe(false)

//     expect(isPasswordAllowed('123456!')).toBe(false) // sin caracteres alfabeticos
//     expect(isPasswordAllowed('ABCdef!')).toBe(false) // sin númeris
//     expect(isPasswordAllowed('abc123!')).toBe(false) // sin mayúsculas
//     expect(isPasswordAllowed('ABC123!')).toBe(false) // sin minúsculas
//     expect(isPasswordAllowed('ABCdef123')).toBe(false) // sin números alphanuméricos
//   })
// })

// describe('Probar isPasswordAllowed con forEach', () => {
//   const validPasswords = ['!aBc123']

//   const invalidPasswords = [
//     '123456!',
//     'ABCdef!',
//     'abc123!',
//     'ABC123!',
//     'ABCdef123',
//   ]

//   validPasswords.forEach((password) => {
//     test(`Acepta ${password}`, () => {
//       expect(isPasswordAllowed(password)).toBe(true)
//     })
//   })

//   invalidPasswords.forEach((password) => {
//     test(`Rechaza ${password}`, () => {
//       expect(isPasswordAllowed(password)).toBe(false)
//     })
//   })
// })
