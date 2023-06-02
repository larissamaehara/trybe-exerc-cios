const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};
//itenm 1:
const customerInfo = (fullOrder) => {
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    const customerName = fullOrder.name;
    const phoneNumber = fullOrder.phoneNumber;
    const street = fullOrder.address.street;
    const number = fullOrder.address.number;
    const apartment = fullOrder.address.apartment;

    return `Olá, ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${phoneNumber}, ${street}, Número: ${number}, AP: ${apartment}.`
}

console.log(customerInfo(order));

// item 2:
const orderModifier = (fullOrder) => {
    //Alterar o nome
    fullOrder.name = 'Luiz Silva';
    fullOrder.payment.total = 50;
    // Pega todos os nomes de pizzas em um array e junto os valores com uma vírgula mais um espaço. join(', ')
    const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
    //retornar a string com resultado
    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00`;
}

console.log(orderModifier(order));