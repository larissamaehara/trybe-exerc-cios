/* eslint-disable no-undef */
// O código da função addNewSkill adiciona uma nova habilidade em uma lista de habilidades (skills).
// No teste, é possível avaliar se o tamanho da lista aumentou em um e se a lista contém a nova habilidade
// após a função ser executada.

const skills = ['HTML', 'CSS', 'JavaScript']

const addNewSkill = (newSkill) => {
  skills.push(newSkill)
}

test('Adiciona Jest na lista de habilidades', () => {
  const previousLength = skills.length
  addNewSkill('Jest')
  expect(skills).toContain('Jest')
  expect(skills).toHaveLength(previousLength + 1)
})

/* Para testar se a função addNewSkill está realmente adicionando mais um item no array skills, são adicionadas no teste as seguintes ações:

Capturar o tamanho do array skills antes de chamar a função.
Comparar o array original com o array modificado pela função utilizando o matcher toHaveLength para verificar se foi adicionado mais um item (previousLength + 1).
Verificar se o item adicionado foi realmente o valor novo passado por parâmetro na função, por meio do matcher toContain. */
