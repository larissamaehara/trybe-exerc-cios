/* eslint-disable no-undef */
const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000)
  }
  return user
}

test('Cria email e senha', () => {
  const user = createUser('Mona', 'Lisa')
  expect(user).toHaveProperty('email', 'mona_lisa@example.com')
  expect(user).toHaveProperty('password')
})

// Nesse exemplo, a função createUser recebe o primeiro e o último nome para criar um objeto com e-mail e senha.
// O e-mail é criado a partir do nome da pessoa, e a senha é numérica, gerada aleatoriamente.

// Para testar a propriedade e-mail, utiliza-se o matcher toHaveProperty, passando dois argumentos:

// No primeiro, a propriedade esperada, no caso e-mail.
// No segundo, o valor esperado para essa propriedade, no caso mona_lisa@example.com.
