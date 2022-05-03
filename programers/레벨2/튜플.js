function solution(s) {
  let arr = []
  let answer = []
  s.replace('{{', '')
    .replace('}}', '')
    .split('},{')
    .sort((a, b) => a - b)
    .map(array => {
      arr.push(array.split(',').map(elem => parseInt(elem)))
    })
  arr
    .sort((a, b) => a.length - b.length)
    .forEach(array => {
      array.forEach(num => {
        if (!answer.includes(num)) {
          answer.push(num)
        }
      })
    })
  return answer
}
