const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' }
]

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência')

console.log(verificaCargo) // true

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson']

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter)

console.log(verifyFirstLetter('J', listNames)) // true
console.log(verifyFirstLetter('X', listNames)) // false
