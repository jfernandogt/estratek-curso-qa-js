import { getRandomInt } from './randomInt'

export default function obtenerEstudiante() {
  const estudiantes = ['Juan', 'Fernando', 'Pablo', 'Carlos', 'Carmen']
  const random = getRandomInt(0, estudiantes.length - 1)

  return estudiantes[random]
}
