/**
 * Em JavaScript, const, let e var são palavras-chave usadas para declarar variáveis, mas possuem algumas diferenças
 * importantes no que diz respeito ao escopo e à mutabilidade.
 *
 */
/**
 * const:
Assim como o let, possui escopo de bloco.
Deve ser inicializada com um valor na sua declaração e não pode ser reatribuída após a sua criação, tornando-a uma variável imutável.
Exemplo com const:
 */

// Exemplo 1 - Valor imutável:
function exampleConstImmutable() {
  const pi = 3.14159;
  // pi = 3.14; // Gera erro: não é possível reatribuir o valor de uma constante
  console.log(pi); // Output: 3.14159
}

//   Exemplo 2 - Escopo de bloco:
function exampleConstBlockScope() {
  const message = "Hello";

  if (true) {
    const message = "World"; // Escopo de bloco, não afeta a variável externa
    console.log(message); // Output: "World"
  }

  console.log(message); // Output: "Hello" (valor da variável externa)
}

//   Exemplo 3 - Objeto constante (valor interno modificável):
const person = {
  name: "Alice",
  age: 30,
};

console.log(person.name); // Output: "Alice"

// É possível modificar o valor das propriedades de um objeto constante
person.name = "Bob";
console.log(person.name); // Output: "Bob"

//   Exemplo 4 - Redeclaração não permitida:
// const x = 5;
// const x = 10; // Gera erro: não é possível redeclarar uma constante no mesmo escopo
// console.log(x);

/**
 * Com const, você cria variáveis com valores imutáveis, ou seja, elas não podem ser reatribuídas após a sua criação. No entanto, se a variável for um objeto ou array, você ainda pode modificar seus atributos ou elementos internos, mas não pode atribuir um novo objeto/array à mesma variável.

É uma boa prática utilizar const sempre que souber que o valor da variável não precisa ser alterado ao longo do código, pois isso aumenta a legibilidade e a segurança do seu código. No entanto, lembre-se de que a imutabilidade é aplicada apenas ao valor da variável em si, e não aos valores internos de objetos ou arrays atribuídos a ela.
 */
