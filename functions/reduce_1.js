const cart = [
  { name: 'iPhone', qtty: 3, price: 1000 },
  { name: 'MacBook', qtty: 1, price: 2000 },
  { name: 'MacBook Pro', qtty: 6, price: 3000 },
  { name: 'iPad', qtty: 2, price: 500.3 },
  { name: 'iMac', qtty: 6, price: 4000 },
]

const totalPrice = cart.reduce((acc, i) => acc + i.qtty * i.price, 0)
console.log(totalPrice)