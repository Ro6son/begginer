const array = [5, 8, 20, 15, 90];
const object = {};

const verifyNumbe1r = array.forEach((param1, param2, param3) => {
  console.log("🚀 ~ file: array.js:5 ~ verifyNumber ~ param1:", param1); // Value 5
  console.log("🚀 ~ file: array.js:5 ~ verifyNumber ~ param1:", param2); // index position 0
  console.log("🚀 ~ file: array.js:5 ~ verifyNumber ~ param1:", param3); // array [ 5, 8, 20, 15, 90 ]
});

const verifyNumber2 = array.forEach((value, index) => {
  console.log("🚀 ~ file: array.js:11 ~ verifyNumber ~ value:", value);
});
// Output: 5
// Output: 8
// Output: 20
// Output: 15
// Output: 90

// Dobrar cada número no array original e criar um novo array com os resultados.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach((number) => {
  const doubled = number * 2;
  doubledNumbers.push(doubled);
});

console.log("🚀 ~ file: array.js:22 ~ doubledNumbers:", doubledNumbers); // Saída: [2, 4, 6, 8, 10]

// Usando forEach para calcular a soma acumulada de um array de números
const values = [10, 20, 30, 40, 50];
let sum = 0;

values.forEach((value) => {
  sum += value;
});

console.log("🚀 ~ file: array.js:33 ~ suma total []:", sum); // Saída: 150

const numbers1 = [10, 20, 30];
const doubledNumbers1 = numbers1.map((number) => {
  return number * 2;
});
console.log(
  "🚀 ~ file: array.js:35 ~ doubledNumbers1 ~ doubledNumbers1:",
  doubledNumbers1
);

// Usando map para criar um novo array com strings convertidas em maiúsculas.
const fruits = ["apple", "banana", "orange"];

const capitalizedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log("🚀 ~ file: array.js:55 ~ capitalizedFruits ~ capitalizedFruits:", capitalizedFruits); // Saída: ["APPLE", "BANANA", "ORANGE"]

/**
 * Resumindo, use forEach quando precisar executar uma operação em cada elemento do array sem criar um novo array com os resultados. 
 * Use map quando desejar criar um novo array com os resultados de uma operação aplicada a cada elemento do array original. 
 * Lembre-se de que o método map é mais adequado para operações de transformação, enquanto o forEach é mais adequado para operações 
 * com efeitos colaterais ou quando não é necessário um novo array resultante.
 */