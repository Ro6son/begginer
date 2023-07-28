/**
 * Em JavaScript, const, let e var são palavras-chave usadas para declarar variáveis, mas possuem algumas diferenças
 * importantes no que diz respeito ao escopo e à mutabilidade.
 *
 */
/**
 * let:
Possui escopo de bloco (ou seja, é acessível apenas dentro do bloco em que foi declarada).
Não é hoisted, ou seja, não é elevada para o topo do seu escopo.
Pode ser reatribuída, mas não redeclarada no mesmo escopo.
Exemplo com let:
 */

// Exemplo 1 - Escopo de bloco:
function exampleBlockScope() {
  let a = 5;

  if (true) {
    let a = 10; // Variável 'a' tem escopo de bloco diferente da externa
    console.log(a); // Output: 10 (valor da variável interna)
  }

  console.log(a); // Output: 5 (valor da variável externa)
}

//   Exemplo 2 - Redeclaração não permitida:
let x = 5;
console.log(x); // Output: 5

// let x = 10; // Gera erro: não é possível redeclarar 'x' no mesmo escopo
// console.log(x);

// Exemplo 3 - Comportamento de hoisting:
// console.log(y); // Gera erro: y não está definida, não ocorre hoisting
let y = 15;
console.log(y); // Output: 15

// Exemplo 4 - Escopo em loops:
function exampleLoopScope() {
  for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2 (cada iteração cria uma nova variável 'i' com escopo de bloco)
  }

  // console.log(i); // Gera erro: 'i' não está definida fora do loop
}

//   Com let, as variáveis têm escopo de bloco e não são suscetíveis ao problema de hoisting que ocorre com var. Além disso,
//o uso de let impede a redeclaração da mesma variável no mesmo escopo, o que pode ajudar a evitar erros em seu código.
//   Em geral, let é uma opção mais moderna e segura para a declaração de variáveis em JavaScript, pois evita algumas
// das armadilhas associadas ao uso de var
