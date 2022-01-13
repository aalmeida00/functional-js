const cart = [
  { name: 'iPhone', qtty: 3, price: 1000, fragile: true },
  { name: 'MacBook', qtty: 1, price: 2000, fragile: false},
  { name: 'MacBook Pro', qtty: 6, price: 3000, fragile: false },
  { name: 'iPad', qtty: 2, price: 500.3, fragile: true },
  { name: 'iMac', qtty: 6, price: 4000, fragile: true },
]


const getFragileElements = cart.filter(item => item.fragile)
  .map(item => item.qtty * item.price)
  .reduce((acc, item) => {
    const newQtty = acc.qtty + 1
    const newPrice = acc.price + item.price
      return {
        qtty: newQtty,
        price: newPrice,
        average: newPrice / newQtty
      }, {qqty: 0, price: 0, average: 0}})

// const getTotalPriceOfElements = getFragileElements.reduce((acc, item) => acc + item.qtty * item.price, 0)
console.log(getFragileElements)


Array.prototype.myReduce = function(fn, initial) {
  let acc = initial
  for (let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i]
      continue
    }
   
    fn(acc, this[i], i, this)
  }
    return acc
  }