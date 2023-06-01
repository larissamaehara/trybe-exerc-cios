const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomers);