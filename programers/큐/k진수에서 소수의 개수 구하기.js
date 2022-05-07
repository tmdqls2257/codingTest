function isPrime(num) {
  if (!num || num === 1) return false
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function solution(n, k) {
  let result = ''
  let count = 0
  while (n > 0) {
    result = (n % k) + result
    n = Math.floor(n / k)
  }
  console.log(result)
  result.split('0').forEach(elem => {
    if (isPrime(Number(elem)) === true) {
      console.log(elem)
      count++
    }
  })
  return count
}
