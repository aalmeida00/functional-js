const nums = [1,2,3,4,5]
const double = nums.map(n => console.log(n * 2))

const names = ['John', 'Amy', 'Mary']
const firstLetter = names.map(n => console.log(n[0]))

const cart = [
  { name: 'iPhone', qtty: 3, price: 1000 },
  { name: 'MacBook', qtty: 1, price: 2000 },
  { name: 'MacBook Pro', qtty: 6, price: 3000 },
  { name: 'iPad', qtty: 2, price: 500 },
  { name: 'iMac', qtty: 6, price: 4000 },
]

const allProducts = cart.map(products => {
  let arr = products.name
  return arr
})

const stockValue = cart.map((products) => {
  let arr = products.price * products.qtty
  return arr
} )

console.log(allProducts)
console.log(stockValue)