//sum(3)(4)(5)

const sum = function(firstValue) {
  return function(secondValue) {
    return function(thirdValue) {
      let res = firstValue + secondValue + thirdValue
      console.log(res)
    }
  }
}

sum(1)(2)(3)


// calculate(5)(6)(fn) = fn as a math expression
// fn -> 3 * 8 = 24
// fn -> 3 + 2 = 5
// fn -> 3 - 2 = 1

const calculate = function(firstValue) {
  return function(secondValue) {
    return function(fn) {
      let res = fn(firstValue, secondValue)
      console.log(res)
    }
  }
}

calculate(3)(5)(function(a, b) {
  return a * b
})

calculate(10)(2)(function(a, b) {
  return a - b
})
