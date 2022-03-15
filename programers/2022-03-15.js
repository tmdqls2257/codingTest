function solution(d, budget) {
  let result = 0
  let median = budget
  let sortArr = d.sort((a, b) => a - b)
  sortArr.map(num => {
    if (median - num >= 0) {
      median = median - num
      result++
    }
  })
  return result
}
