function solution(answers) {
  //     1번 수포자가 찍는 방식: 1, 2, 3, 4, 5 반복
  //     2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5 반복
  //     3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복
  let result = []
  const numberOne = [1, 2, 3, 4, 5]
  const numberTwo = [2, 1, 2, 3, 2, 4, 2, 5]
  const numberThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const score = [0, 0, 0]
  for (let i = 0; i < answers.length; i++) {
    if (numberOne[i % 5] === answers[i]) {
      score[0]++
    }
    if (numberTwo[i % 8] === answers[i]) {
      score[1]++
    }
    if (numberThree[i % 10] === answers[i]) {
      score[2]++
    }
  }
  const maxScore = Math.max(...score)
  score.map((elem, idx) => {
    if (elem === maxScore) {
      result.push(idx + 1)
    }
  })
  return result
}
