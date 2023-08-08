// Método Promise.race
// Parâmetro recebido: array de promises

// Retorno: o retorno varia de acordo com a situação:

// quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.
// quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.

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

Promise.race([
  generateResolvedPromise(3000),
  generateRejectedPromise(1000),
  generateResolvedPromise(2000)
])
  .then((result) => {
    console.log(result)
  })
  .catch((error) => console.log(error.message))
