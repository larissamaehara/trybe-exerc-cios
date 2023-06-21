// Função que contenha a chamada do preventDefault, responsável por interromper o comportamento padrão do botão Enviar.

const subimitControl = (event) => {
  event.preventDefault()
}

window.onload = function () { // Botão preparado para funcionar assim que a página for aberta.
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
