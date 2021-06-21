export default function calculator(params) {
  const [command, ...arg] = params
  const actions = {
    sumar,
    restar,
  }
  if (actions[command]) {
    return actions[command](arg)
  }
}

function restar([a, b]) {
  return a - b
}

function sumar(values) {
  return values.reduce((a, b) => a + b, 0)
}
