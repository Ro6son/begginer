async function getUserGithub(user) {
  try {
    const result = await fetch(`https://api.github.com/users/${user}`);
    console.log(
      "🚀 ~ file: promise.js:5 ~ getUserGithub ~ result:",
      await result.json()
    );
  } catch (error) {
    console.log("🚀 ~ file: promise.js:6 ~ getUserGithub ~ error:", error);
  }
}

getUserGithub("ro6son");

// async function getUserGithub(user) {
//     try {
//       const result = await fetch(`https://api.github.com/users/${user}`);
//       const resultJson = await result.json();
//       console.log("🚀 ~ file: promise.js:19 ~ getUserGithub ~ resultJson:",
//       resultJson.name)

//     } catch (error) {
//       console.log("🚀 ~ file: promise.js:6 ~ getUserGithub ~ error:", error);
//     }
//   }

//   getUserGithub("ro6son");

/**
 * then: O método then() é usado para lidar com o resultado ou valor retornado por uma Promise quando ela é resolvida (fulfilled). 
 * Ele é chamado quando a Promise é bem-sucedida e recebe duas funções de retorno: uma para lidar com o resultado (valor resolvido) 
 * e outra para lidar com possíveis erros (rejeição).
 * catch: O método catch() é usado para lidar com a rejeição de uma Promise, ou seja, quando ela falha. Se houver um erro em qualquer
 *  ponto da cadeia de Promises, o controle será transferido para o bloco catch() mais próximo. Ele recebe uma função de retorno que 
 * lida com o erro.
    finally: O método finally() é usado para definir uma ação que deve ser executada independentemente de a Promise ser resolvida 
    ou rejeitada. É geralmente utilizado para executar código de limpeza ou finalização. Esse bloco será executado sempre, 
    independentemente do resultado da Promise.
    Nota: O async/await não substitui as Promises, mas é uma forma de trabalhar com elas de maneira mais síncrona e com uma 
    sintaxe mais limpa.
Exemplo:
 */

// function getUserGithub(user) {
//     fetch(`https://api.github.com/users/${user}`)
//       .then(result => result.json())
//       .then(resultJson => {
//         console.log("🚀 ~ file: promise.js:19 ~ getUserGithub ~ resultJson:", resultJson);
//       })
//       .catch(error => {
//         console.log("🚀 ~ file: promise.js:6 ~ getUserGithub ~ error:", error);
//       })
//       .finally(() => {
//         console.log("Promise acessada com sucesso!");
//       });
//   }

//   getUserGithub("ro6son");
