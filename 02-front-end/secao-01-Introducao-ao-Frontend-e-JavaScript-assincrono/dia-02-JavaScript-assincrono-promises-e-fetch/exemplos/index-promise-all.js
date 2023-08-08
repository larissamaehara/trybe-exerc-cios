// Método Promise.all
// Parâmetro recebido: array de promises

// Retorno: o retorno varia de acordo com a situação:

// quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.
// quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise que foi rejeitada.

// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10)

// cria uma promise que será sempre resolvida
const generateResolvedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber()
      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`)
      resolve(
        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
      )
    }, timer)
  })

// cria uma promise que será sempre rejeitada
const generateRejectedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber()
      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`)
      reject(
        new Error(
          `O número ${randomNumber} é inválido. Promise rejeitada em ${
            timer / 1000
          } segundo(s)`
        )
      )
    }, timer)
  })

Promise.all([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateRejectedPromise(2000)
])
  .then((result) => {
    console.log(result)
  })
  .catch((error) => console.log(error.message))
