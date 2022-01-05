const cart = [
  { name: 'iPhone', qtty: 3, price: 1000 },
  { name: 'MacBook', qtty: 1, price: 2000 },
  { name: 'MacBook Pro', qtty: 0, price: 3000 },
  { name: 'iPad', qtty: 2, price: 500 },
  { name: 'iMac', qtty: 6, price: 4000 },
]

const getName = item => item.name
const qttyBiggerThanZero = item => item.qtty > 1

const validCartAndNames = cart.filter(qttyBiggerThanZero).map(getName)

console.log(validCartAndNames)