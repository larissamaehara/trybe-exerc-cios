const items = ['Camiseta', 'Carregador', 'Chinelo']
const newItems = [...items, 'Meia']
console.log(newItems) // ['Camiseta', 'Carregador', 'Chinelo', 'Meia'];

const spring = ['OUT', 'NOV', 'DEZ']
const summer = ['JAN', 'FEV', 'MAR']
const fall = ['ABR', 'MAI', 'JUN']
const winter = ['JUL', 'AGO', 'SET']
const months = [...summer, ...fall, ...winter, ...spring]
console.log(months)

const product = {
  id: 1,
  name: 'Camiseta'
}

const productPrice = {
  price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice }

console.log(newProduct) // {id: 1, name: 'Camiseta', price: 23}
