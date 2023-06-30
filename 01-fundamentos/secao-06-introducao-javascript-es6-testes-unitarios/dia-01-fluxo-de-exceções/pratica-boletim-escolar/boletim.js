const validarMedia = (n1, n2, n3, n4) => {
  // Verificar se algum dos parâmetros é uma string:
  if (typeof n1 !== 'number' || n2 !== 'number' || n3 !== 'number' || n4 !== 'number') {
    throw new Error('ATENÇÃO! Os valores das notas deve ser numérico')
  }
}

const calcularMedia = (n1, n2, n3, n4) => {
  try {
    validarMedia(n1, n2, n3, n4)
    const soma = n1 + n2 + n3 + n4
    const media = soma / 4
    return media
  } catch (error) {
    return error.message
  }
}
console.log(calcularMedia(1, 2, 3, 4))
