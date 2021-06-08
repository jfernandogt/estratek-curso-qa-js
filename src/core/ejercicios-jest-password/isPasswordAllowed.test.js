import isPasswordAllowed from './isPasswordAllowed'
import cases from 'jest-in-case'

function generadorCasos(objCases) {
  return Object.entries(objCases).map(([nombre, password]) => ({
    name: `${nombre} - ${password}`,
    password,
  }))
}

cases(
  'isPasswordAllowed: contraseñas válidas',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(true)
  },
  generadorCasos({
    'contraseña válida': '!aBc123',
  })
)

cases(
  'isPasswordAllowed: contraseñas inválidas',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(false)
  },
  generadorCasos({
    'muy pequeña': 'a2c!',
    'sin caracteres alfabeticos': '123456!',
    'sin números': 'ABCdef!',
    'sin mayúsculas': 'abc123!',
    'sin minúsculas': 'ABC123!',
    'sin números alphanuméricos': 'ABCdef123',
  })
)
