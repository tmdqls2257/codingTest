function solution(progresses, speeds) {
  //     날마다 progresses배열에 speeds 만큼 더해준다.
  //     1일차 [94, 60, 60]
  //     2일차 [95, 90, 65]
  //     3일차 [96, 100, 70]
  //     7일차 [100, 100, 95]
  //     반복문을 돌면서 progresses의 배열의 0번째의 progress = progresses[0] + (speeds[0] * days)
  //
  const answer = []

  let count = 0,
    progress = 0,
    //         재귀로 받아오지 않기 때문에 day를 넣어 곱해줍니다.
    days = 1

  while (progresses[0]) {
    progress = progresses[0] + speeds[0] * days
    //         progress가 100이상이면 count++, progresses와 speeds를 빼내옵니다.
    if (progress >= 100) {
      count++
      progresses.shift()
      speeds.shift()
    } else {
      // 그게 아니라면
      if (count > 0) {
        answer.push(count)
      }
      days++
      count = 0
    }
  }
  answer.push(count)
  return answer
}
