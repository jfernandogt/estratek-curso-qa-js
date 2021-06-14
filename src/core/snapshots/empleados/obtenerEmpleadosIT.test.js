import obtenerEmpleadosIT from './obtenerEmpleadosIT'

test('Validar el listado de empleados de IT', () => {
  // Primero utilizamos console.log para obtenerlos
  const empleados = obtenerEmpleadosIT()
  // console.log(empleados)
  // expect(empleados).toEqual([
  //   { name: 'Fernando', department: 'IT' },
  //   { name: 'Carolina', department: 'IT' },
  // ])

  // La mejor forma es implementar un matchsnapshot
  expect(empleados).toMatchSnapshot()

  // Casos de uso
  /*
  1. Modelos de bases de datos
  2. Queries a bases de datos
  3. Templates
  4. Listados (zip codes, departamentos, paises)

  https://codewithhugo.com/abusing-jest-snapshot-tests-some-nice-use-cases/
  */
})

test('Validar el listado de empleados de IT usando inlineSnapshots', () => {
  const empleados = obtenerEmpleadosIT()
  expect(empleados).toMatchInlineSnapshot(`
    Array [
      Object {
        "department": "IT",
        "name": "Fernando",
      },
      Object {
        "department": "IT",
        "name": "Carolina",
      },
      Object {
        "department": "IT",
        "name": "Marcos",
      },
    ]
  `)
})
