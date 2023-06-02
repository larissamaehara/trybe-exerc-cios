const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  const addProperty = (object, key, value) => {
    if (typeof object[key] === 'undefined') {
      object[key] = value;
    }
  };
  // Chamada da função passando os valores dos parâmetros
  addProperty(customer, 'email', 'tryber@trybe.com.br');
  addProperty(customer, 'fone', '11-12345678');
  addProperty(customer, 'userGithub', 'robertosilva');
  addProperty(customer, 'linkedIn', 'Roberto Silva');
  
  // Exibe o objeto transformado
  console.log(customer);
  