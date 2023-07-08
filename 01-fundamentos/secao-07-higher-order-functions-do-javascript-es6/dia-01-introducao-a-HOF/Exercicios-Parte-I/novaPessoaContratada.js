const employeeGeneratorEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_')
  return { fullName, email: `${email}@trybe.com` }
}

const newEmployees = () => {
  const employees = {
    id1: employeeGeneratorEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGeneratorEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGeneratorEmail('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees
}

console.log(newEmployees(employeeGeneratorEmail))
