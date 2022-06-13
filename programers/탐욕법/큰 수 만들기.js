function solution(number, k) {
  const stack = []
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop()
      k--
    }
    stack.push(number[i])
  }

  stack.splice(stack.length - k, k)
  return stack.join('')
}
