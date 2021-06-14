const empleados = [
  {
    name: 'Fernando',
    department: 'IT',
  },
  {
    name: 'Ariel',
    department: 'Contabilidad',
  },
  {
    name: 'Carolina',
    department: 'IT',
  },
  {
    name: 'Luis',
    department: 'RRHH',
  },
  {
    name: 'Marcos',
    department: 'IT',
  },
]

export default function obtenerEmpleadosIT() {
  return empleados.filter((empleado) => empleado.department === 'IT')
}
