/**
 * Em JavaScript, const, let e var são palavras-chave usadas para declarar variáveis, mas possuem algumas diferenças
 * importantes no que diz respeito ao escopo e à mutabilidade.
 *
 */

/**
 * Possui escopo de função ou escopo global, mas não tem escopo de bloco (ou seja, é acessível dentro de toda a função em que foi declarada).
 * É hoisted (elevada) para o topo do seu escopo, o que significa que a declaração da variável é movida para o início do seu escopo durante
 * a fase de criação.
 * Pode ser reatribuída e redeclarada.
 * É recomendado evitar o uso de var, pois pode levar a erros devido ao seu comportamento de hoisting e escopo menos restritivo.
 * Exemplo com var:
 */

// Exemplo 1 - Comportamento de hoisting:
function exampleHoisting() {
  console.log(a); // Output: undefined (a variável é declarada, mas ainda não tem valor atribuído)
  var a = 5;
  console.log(a); // Output: 5
}

//   Exemplo 2 - Escopo de função:

function exampleFunctionScope() {
  var b = 10;

  if (true) {
    var b = 20; // Mesma variável 'b' do escopo externo é reatribuída
    console.log(b); // Output: 20
  }

  console.log(b); // Output: 20 (valor modificado)
}

//   Exemplo 3 - Variável global:
var globalVar = "Eu sou global";

function exampleGlobalVariable() {
  console.log(globalVar); // Output: 'Eu sou global'

  if (true) {
    var localVar = "Eu sou local"; // Escopo de função, mas não escopo de bloco
    console.log(localVar); // Output: 'Eu sou local'
  }

  console.log(localVar); // Output: 'Eu sou local' (ainda acessível fora do bloco)
}

exampleGlobalVariable();
console.log(globalVar); // Output: 'Eu sou global'
console.log(localVar); // Gera erro: localVar não está definida fora do escopo da função

// Exemplo 4 - Redeclaração com var:
var x = 5;
console.log(x); // Output: 5

var x = 10; // É possível redeclarar a variável 'x' usando var
console.log(x); // Output: 10
