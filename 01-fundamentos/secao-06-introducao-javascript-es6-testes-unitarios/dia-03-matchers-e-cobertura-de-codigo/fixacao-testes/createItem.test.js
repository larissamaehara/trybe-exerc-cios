/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Also under the alias: it.todo(name)

Use test.todo when you are planning on writing tests.
These tests will be highlighted in the summary output at the end so you know how many tests you still need todo. */

const createItem = require('./createItem')

describe('a função createItem', () => {
  // Teste se a função createItem cria um item válido:
  it('cria um item válido', () => {
    const actualItem = createItem('banana', 'kg', 1.99, 20)
    const expectedItem = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }
    expect(actualItem).toEqual(expectedItem)
  })

  // Teste se a função createItem utiliza zero como quantidade-padrão
  it('utiliza zero como quantidade padrão', () => {
    const actualItem = createItem('banana', 'kg', 1.99)
    expect(actualItem).toHaveProperty('quantity', 0)
  })

  // Teste se a função createItem lança algum erro quando não recebe parâmetros.
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow()
  })

  // Teste se a função createItem lança um erro caso o nome do item não seja uma string.
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow('O nome do item deve ser uma string')
  })

  // Teste se a função createItem lança um erro caso o preço do item seja negativo ou zero.
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01))
      .toThrow('O preço do item deve ser maior que zero')
  })
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0.00))
      .toThrow('O preço do item deve ser maior que zero')
  })
})
