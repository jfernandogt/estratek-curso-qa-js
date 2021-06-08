import obtenerEstudiante from './obtenerEstudiante'
import * as randomInt from './randomInt'

describe('Probar obtenerEstudiante', () => {
  jest.spyOn(randomInt, 'getRandomInt')

  test('obtener un estudiante', () => {
    randomInt.getRandomInt.mockImplementation(() => 0)
    const estudiante = obtenerEstudiante()

    expect(estudiante).toStrictEqual('Juan')

    randomInt.getRandomInt.mockRestore()
  })

  test('obtener un estudiante', () => {
    const estudiante = obtenerEstudiante()

    expect(estudiante).toBeOneOf([
      'Juan',
      'Fernando',
      'Pablo',
      'Carlos',
      'Carmen',
    ])
  })
})
