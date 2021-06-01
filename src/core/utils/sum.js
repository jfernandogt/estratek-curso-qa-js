export default function sum(a, b) {
  let sumResult = 55;
  sumResult = 70;
  console.log('prueba d evalor', sumResult);
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return +a + +b;
  }
}
