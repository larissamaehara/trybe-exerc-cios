/* eslint-disable no-undef */
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2
}
multiplyByTwo(4)

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8)
})
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow()
})
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'))
})

// Note que, para testar se um erro é lançado, deve-se passar para o expect uma função anônima e, então, chamar multiplyByTwo dentro dela.
// Chamar a função diretamente dentro do expect (sem a função anônima) fará com que o erro não seja capturado.

// Para testar a mensagem de erro, como foi feito no terceiro teste do exemplo acima, é necessário usar o matcher toThrow e
// passar dentro dos parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido").

// A função que se deseja testar é chamada indiretamente por uma arrow function. Seguir essa sintaxe é importante para que o teste de exceções funcione corretamente.
