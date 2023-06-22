// Função que contenha a chamada do preventDefault, responsável por interromper o comportamento padrão do botão Enviar.

const subimitControl = (event) => {
  event.preventDefault()
  if (nameValid() && emailValid() && motivationValid()) {
    alert('Dados enviados! Obrigado por participar!')
  } else {
    alert('Dados inválidos! Por favor verifique seus dados')
  }
}

window.onload = function () {
  // Botão preparado para funcionar assim que a página for aberta.
  // Escutar pelo evento de clique no botão Enviar através do addEventListener.
  // O segundo parâmetro do addEventListener será a função criada acima.
  const submitBtn = document.querySelector('#submit-btn')
  submitBtn.addEventListener('click', subimitControl)
}

const submitBtn = document.querySelector('#submit-btn')

//  Função que desabilita o botão Enviar, quando o Limpar for clicado
const clearInputs = () => {
  submitBtn.disabled = true
}
window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn')
  clearBtn.addEventListener('click', clearInputs)
}

// Exercício 5
// Função que habilita o botão enviar desde que o radio-button com id agreement tenha sido marcado
const submitEnable = () => {
  const submitBtn = document.querySelector('#submit-btn')
  const agreement = document.querySelector('#agreement')
  submitBtn.disabled = !agreement.checked
}

window.onload = function () {
  const agreement = document.querySelector('#agreement')
  agreement.addEventListener('change', submitEnable)
}

// Exercicio 6
// O input Nome completo deve ter no mínimo 10 e no máximo 40 caracteres;
const nameValid = () => {
  const nameElement = document.querySelector('#fullname')
  const nameLength = nameElement.ariaValueMax.length
  return nameLength >= 10 && nameLength <= 40
}
// O input E-mail deve ter no mínimo 10 e no máximo 50 caracteres;
const emailValid = () => {
  const emailElement = document.querySelector('#email')
  const emailLength = emailElement.ariaValueMax.length
  return emailLength >= 10 && emailLength <= 50
}
// O textarea deve ter no mínimo 1 e no máximo 500 caracteres.
const motivationValid = () => {
  // eslint-disable-next-line quotes
  const motivationElement = document.querySelector("#question")
  const motivationLength = motivationElement.value.length
  return motivationLength > 0 && motivationLength <= 500
}
