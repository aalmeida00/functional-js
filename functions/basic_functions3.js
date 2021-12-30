// arrow function
const happyNewYear = () => console.log('Happy New Year!')
happyNewYear()

const greetings = value => `Hello ${value}`
console.log(greetings('John'))

const sum = (...arr) => {
  let total = 0
  for (let n of arr) {
    total += n
  }
  return total
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const minus = (a, b) => a - b
console.log(50, 10)

const elevate = base => exp => Math.pow(base, exp)
console.log(elevate(2)(8))

//this

Array.prototype.last = function () {
  console.log(this[this.length - 1])
}

Array.prototype.first = () => {
  console.log(this[0])
}

const numbers = [1, 2, 3]
numbers.last()
numbers.first()