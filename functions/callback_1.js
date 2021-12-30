const exec = (fn, a, b) => {
  console.log(fn(a, b))
}

const sum = (a, b) => a + b
const minus = (a, b) => a - b

exec(sum, 10, 20)
exec(minus, 20, 5)

setInterval(() => console.log('Exec ...'), 1000)