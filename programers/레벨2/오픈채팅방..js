function solution(record) {
  //     배열의 0번째가 Enter이면 2번째님이 들어왔습니다.
  //     배열의 0번째가 Leave이면 2번째님이 나갔습니다.
  //     배열의 0번째가 Change이면 1번 UID와 같은 닉네임을 2번으로 변경합니다.
  const answer = []
  const userData = {}
  record.forEach(elem => {
    const [state, uid, name] = elem.split(' ')
    if (state === 'Enter') {
      answer.push([uid, '님이 들어왔습니다.'])
    } else if (state === 'Leave') {
      answer.push([uid, '님이 나갔습니다.'])
    }
    userData[uid] = name
  })
  return answer.map(elem => userData[elem[0]] + elem[1])
}
