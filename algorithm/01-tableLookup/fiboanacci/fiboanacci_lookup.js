var fib = [0, 1]

function fibonacci (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  if (fib[n] != null) return fib[n]
  fib[n] = 3*fibonacci(n - 1) + 2*fibonacci(n - 2)
  return fib[n]
}

var startTime = Date.now()
console.log('fibonacci(5)=', fibonacci(5))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)
