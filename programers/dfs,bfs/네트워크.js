function solution(n, computers) {
  //     computers배열을 돌면서
  //     i번째 노드에있는 값들중 i번째 값이 아닌 것들이 간선의 정보가 됩니다.
  //     양뱡향이기 때문에 메모이제이션을 방문했던 곳을 다시 계산하기 않게 해야합니다.
  let answer = 0
  let visit = []
  let needVisit = []

  for (let i = 0; i < n; i++) {
    visit.push(false)
  }

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      needVisit.push(i)
      visit[i] = true
      answer++

      while (needVisit.length !== 0) {
        let node = needVisit.shift()
        computers[node].forEach((e, idx) => {
          if (idx !== node) {
            if (!visit[idx] && computers[node][idx] === 1) {
              visit[idx] = true
              needVisit.push(idx)
            }
          }
        })
      }
    }
  }

  return answer
}
