const sum = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a - b)
    }, 200)
  })
}

const substract = (a, b) => a - b
module.exports = { sum, substract }
