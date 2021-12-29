const goodMorning = function () {
  console.log('Good Morning')
}

const goodEvening = function () {
  console.log('Good Evening')
}

// pass a function as an argument to another function
function doSomething(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

doSomething(3)
doSomething(goodMorning)
doSomething(goodEvening)

// return a function from a function
function elevate(base){
  return function(exp){
    return Math.pow(base, exp)
  }
}

const square = elevate(2)
console.log(square(3))