function solution(fees, records) {
  let answer = []
  let recordsArr = []
  for (let i = 0; i < records.length; i++) {
    let current = records[i].split(' ')
    recordsArr.push(current)
  }

  recordsArr.sort((a, b) => {
    // 차량을 번호, 시각 순으로 정렬
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })

  let previousTime = 0
  let totalCostTime = 0

  while (recordsArr.length) {
    // 입/출차 기록이 존재할 때까지 반복
    let current = recordsArr.shift()
    let time = current[0].split(':')
    let totalTime = Number(time[0]) * 60 + Number(time[1])
    if (recordsArr.length && recordsArr[0][1] === current[1]) {
      // 현재 차량을 저장한 current와 다음 차량이 존재하거나, 번호가 같은지 확인
      if (current[2] === 'IN') {
        // 입차하는 경우 previousTime에 현재 차량의 시각을 저장
        previousTime = totalTime
      } else {
        // 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다
        let usedTime = totalTime - previousTime
        totalCostTime += usedTime
      }
    } else {
      // 번호가 다르거나 다음 차량이 없는 경우
      if (current[2] === 'IN') {
        // 입차하는 경우 출차한 기록이 없으므로 23:59에서 totalTime을 뺀 값을 totalCostTime에 더한다
        let usedTime = 1439 - totalTime
        totalCostTime += usedTime
      } else {
        // 출차하는 경우 totalCostTime에 현재 시간을 나타내는 totalTime - previousTime을 더한다
        let usedTime = totalTime - previousTime
        totalCostTime += usedTime
      }
      if (totalCostTime <= fees[0]) {
        // 기본 시간보다 totalCostTime이 작거나 같을 경우 기본요금을 answer에 push
        answer.push(fees[1])
      } else {
        // 기본 시간보다 클 경우 조건에 맞는 값을 answer에 push
        let cost =
          fees[1] + Math.ceil((totalCostTime - fees[0]) / fees[2]) * fees[3]
        answer.push(cost)
      }
      totalCostTime = 0
    }
  }

  return answer
}
